import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

// Styles
import { styles } from './styles';

const Search = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Game",
            headerStyle: {
                backgroundColor: '#6685A4',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Text>Detalles</Text>
        </View>
    )
}

export default Search;
