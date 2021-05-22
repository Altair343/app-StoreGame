import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';


const Search = ({ navigation }) => {


    useEffect(() => {
        navigation.setOptions({
            title: "Buscar",
            headerStyle: {
                backgroundColor: varStyles.grey.G900,
            },
            headerTintColor: varStyles.grey.G600,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        })
    }, [])


    return (
        <View style={styles.container}>
            <Text>Busqueda</Text>
        </View>
    )
}

export default Search;
