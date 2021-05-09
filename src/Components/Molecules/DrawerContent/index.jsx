
import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import * as SecureStore from 'expo-secure-store';

// Styles
import { styles } from './styles';

export function DrawerContent(props) {

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View>
                    <DrawerItem
                        label="Home"
                        onPress={() => { props.navigation.navigate('Home') }}
                    />
                </View>
            </DrawerContentScrollView>
            <View>
                <DrawerItem
                    label="Sign Out"
                    onPress={async () => {

                        let result = await SecureStore.getItemAsync('token');
                        if (result) {
                            await SecureStore.deleteItemAsync('token');
                            console.log('Sesión cerrada');
                            props.navigation.navigate('Login')
                        }
                    }}
                />
            </View>

        </View>
    );

}