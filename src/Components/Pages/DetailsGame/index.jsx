import React, { useLayoutEffect, useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

//Api
import Api from '../../Api';

import CardImg from '../../Atoms/CardImgT2';
import ButtonT1 from '../../Atoms/ButtonT1';
import ButtonT2 from '../../Atoms/ButtonT2';

const Search = ({ navigation, route }) => {
    const { idGame } = route.params;
    const [game, setGame] = useState({});

    const GameData = async () => {
        const data = await Api.GetOne(idGame);
        if (data.response) {
            setGame(data.data);
        } else {
            console.log(data);
        }
    }


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
        <ScrollView style={styles.container}>
            <View style={styles.section1}>
                <CardImg imgURL={game.imgURL} />
                <Text style={styles.title}> {game.title ? `${game.title}` : ``}</Text>
            </View>
            <ButtonT1 title={`Comprar: MX $${game.price} `} action={() => { }} />
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
    )
}

export default Search;
