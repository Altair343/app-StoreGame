import React, { Component } from 'react'
import * as SecureStore from 'expo-secure-store';
import { View, Alert } from 'react-native';

// Styles
import { styles } from './styles';
import ButtonT1 from '../../Atoms/ButtonT1';
import InputT1 from '../../Atoms/InputT1';

import Api from '../../Api';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: null,
            Password: null,
            Username: null,
        };
    }

    render() {
        const { Email, Password, Username } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.formControl}>
                    <InputT1
                        title="Nombre de usuario"
                        value={Username}
                        custom={{
                            onChangeText: username => this.setState({ Username: username }),
                        }}
                    />
                </View>
                <View style={styles.formControl}>
                    <InputT1
                        title="Correo"
                        value={Email}
                        custom={{
                            onChangeText: email => this.setState({ Email: email }),
                            autoCompleteType: 'email'
                        }}
                    />
                </View>
                <View style={styles.formControl}>
                    <InputT1
                        title="Contraseña"
                        value={Password}
                        custom={{
                            onChangeText: pass => this.setState({ Password: pass }),
                            secureTextEntry: true
                        }}
                    />
                </View>
                <View style={styles.formControl}>
                    <ButtonT1 title="Crear cuenta" action={async () => {
                        let message;
                        const newUser = {
                            username: Username,
                            email: Email,
                            password: Password,
                        }

                        const data = await Api.Singup(newUser);

                        if (data.response) {
                            await SecureStore.setItemAsync('token', data.token);
                            this.props.navigation.navigate('Home');

                        } else {

                            if (data.code == 'auth/duplicate-email') {
                                message = 'El correo ya esta en uso';

                            } else if (data.code == 'auth/duplicate-username') {
                                message = 'El nombre de usuario ya esta en uso';

                            } else {
                                console.log(data);
                                message = 'ocurrio un error';
                            }

                            Alert.alert("Error", message)
                        }
                    }} />
                </View>
            </View>
        )
    }
}

export default Register;
