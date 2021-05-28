import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { ScrollView, View, Text, Alert, TouchableOpacity, ActivityIndicator, Vibration } from 'react-native';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
import { Modalize } from 'react-native-modalize';
import * as SecureStore from 'expo-secure-store';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

//Api
import Api from '../../Api';

import CardImg from '../../Atoms/CardImgT2';
import CardImg3 from '../../Atoms/CardImgT3';
import ButtonT1 from '../../Atoms/ButtonT1';
import ButtonT2 from '../../Atoms/ButtonT2';
import StripeIcon from '../../Atoms/StripeIcon';

const Search = ({ navigation, route }) => {
    const { idGame } = route.params;
    const modalizeRef = useRef(null);
    const [game, setGame] = useState({});
    const [stripeData, setStripeData] = useState({});
    const [metodPage, setMetodPage] = useState(false);
    const [spinner, setSpinner] = useState(false);


    const GameData = async () => {
        const data = await Api.GetOne(idGame);
        if (data.response) {
            setGame(data.data);
        } else {
            console.log(data);
        }
    }

    const card = async () => {
        Stripe.setOptionsAsync({
            publishableKey: 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXX', // Your key
            androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
        });

        try {
            const options = {
                requiredBillingAddressFields: 'full',
                prefilledInformation: {
                    billingAddress: {
                        name: 'Gunilla Haugeh',
                        line1: 'Canary Place',
                        line2: '3',
                        city: 'Macon',
                        state: 'Georgia',
                        country: 'US',
                        postalCode: '31217',
                    },
                },
            };
            const paymentMethod = await Stripe.paymentRequestWithCardFormAsync(options);
            setStripeData(paymentMethod);
            setMetodPage(true);

        } catch (error) {
            console.log(error);
        }
    }

    const shop = async () => {
        setSpinner(true);

        try {
            const paymenData = {
                paymentMethod: stripeData,
                idProduct: idGame
            }

            const data = await Api.Payment(paymenData);
            console.log(data.message.name);

            if (data.response) {
                setSpinner(false);
                onClose();
                Vibration.vibrate();
                Alert.alert("Pagado", "Pago Completado");
                Alert.alert(
                    "Pagado",
                    "Pago Completado",
                    [
                        {
                            text: "OK", onPress: async () => {
                                navigation.navigate('Library')
                            }
                        }
                    ]
                );

                Vibration.cancel();

            } else {
                if (data.message.name == "TokenExpiredError") {
                    Alert.alert(
                        "Sesión",
                        "Su sesión  expirado, inicie sesión otra vez",
                        [
                            {
                                text: "OK", onPress: async () => {
                                    await SecureStore.deleteItemAsync('token');
                                    console.log('Sesión cerrada');
                                    navigation.navigate('Login', { stateloader: false })
                                }
                            }
                        ]
                    );
                } else {
                    console.log(data.error);
                    Alert.alert("Error 1", "Ocurrio un error con el servidor");
                }
            }

        } catch (error) {
            console.log(error);
            Alert.alert("Error 2", "Ocurrio un error con el servidor");
        }
    }
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };

    useEffect(() => {
        GameData();
    }, [idGame])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: " ",
            headerStyle: styles.headerStyle,
            headerTintColor: varStyles.grey.G600,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        })
    }, [navigation])

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.section1}>
                    <CardImg imgURL={game.imgURL} />
                    <Text style={styles.title}> {game.title ? `${game.title}` : ``}</Text>
                </View>
                <ButtonT1 title={`Comprar: MX $${game.price}`} action={() => { onOpen() }} />
                <View style={styles.detailsContent}>
                    <Text style={styles.detailsTitle} > Detalles del juego</Text>
                    <Text style={styles.detailsDescription}>{game.description}</Text>
                </View>

                <ScrollView
                    style={styles.categories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        game.categories &&
                        game.categories.map(item => <ButtonT2 key={item} title={item} action={() => navigation.navigate('SearchCategory', { nameCat: item })} />)
                    }
                </ScrollView>
            </ScrollView>
            <Modalize
                ref={modalizeRef}
                snapPoint={270}
                modalHeight={270}
                modalStyle={styles.modalize__content}
                HeaderComponent={
                    <View>
                        <Text>Logo</Text>
                    </View>
                }
            >
                <View style={styles.sectionPay}>
                    <View style={styles.sectionInfo}>
                        <CardImg3 imgURL={game.imgURL} />
                        <Text style={styles.title}> {game.title ? `${game.title}` : ``}</Text>
                        <Text style={styles.price}> {game.price ? `$${game.price}` : ``}</Text>
                    </View>
                    <View style={styles.sectionInfo2}>
                        <TouchableOpacity
                            onPress={() => { card() }}
                        >
                            <StripeIcon />
                        </TouchableOpacity>
                    </View>
                    <ButtonT1 title={spinner ? (<ActivityIndicator size="small" color="#FFFFFF" />) : metodPage ? `Realizar pago` : `Pagar`} action={() =>
                        metodPage ? shop() : Alert.alert("Error", "Escoja un metodo de pago")} />
                </View>
            </Modalize>
        </>
    )
}

export default Search;
