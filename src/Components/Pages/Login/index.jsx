import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

// Styles
import { styles } from './styles';
import ButtonT1 from '../../Atoms/ButtonT1';
import InputT1 from '../../Atoms/InputT1';
import Loading from '../../Atoms/Loading';

import Api from '../../Api';

const Login = ({ navigation }) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [messageError, setMessageError] = useState(null);
    const [loading, setLoading] = useState(true);


    const signin = async () => {
        //falta validar campos vacios

        const data = await Api.Singnin(email, password);

        if (data.response) {
            if (data.role == 'user') {
                await SecureStore.setItemAsync('token', data.token);
                navigation.navigate('Home');
            } else {
                setMessageError('El usuario no tiene los permisos');
                Alert.alert(
                    "Error",
                    messageError
                )
            }
        } else {
            if (data.code === 'auth/wrong-email') {
                setMessageError('Correo o contraseña no validas');
            } else if (data.code === 'auth/wrong-password') {
                setMessageError('Correo o contraseña no validas');
            } else if (data.code === 'auth/global-error') {
                setMessageError('Ocurrio un error no previsto con nuestros servidores intentelo de nuevo o mas tarde');
            } else {
                setMessageError('Ocurrio un error');
            }
            Alert.alert(
                "Error",
                messageError
            )
        }

    }

    const verification = async () => {
        let result = await SecureStore.getItemAsync('token');
        if (result) {

            try {

                const verifyTok = await Api.VerifyToken();

                if (verifyTok.code == "token/verify") {
                    navigation.navigate('Home');

                } else {
                    await SecureStore.deleteItemAsync('token');
                    setLoading(false);

                }
    
            } catch (error) {
                await SecureStore.deleteItemAsync('token');
                setLoading(false);

            }

        } else {
            setLoading(false);
            
        }
    }

    useEffect(() => {
        verification();
    }, [])

    return (
        <Loading loading={loading}>
            <View style={styles.container}>
                <View style={styles.formControl}>
                    <InputT1
                        title="Correo"
                        value={email}
                        custom={{
                            onChangeText: email => onChangeEmail(email),
                            autoCompleteType: 'email'
                        }}
                    />
                </View>
                <View style={styles.formControl}>
                    <InputT1
                        title="Contraseña"
                        value={password}
                        custom={{
                            onChangeText: pass => onChangePassword(pass),
                            secureTextEntry: true
                        }}
                    />
                </View>
                <View style={styles.formControl}>
                    <ButtonT1 title="Iniciar sesión" action={() => { signin() }} />
                </View>

                <View style={styles.contentLink}>
                    <Text style={styles.textLinkDisable}> ¿No tienes cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.textLink}> Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Loading>
    );
}

export default Login;

