import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';


// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

import Api from '../../Api';

const Search = ({ navigation }) => {
    const [varSearch, setVarSearch] = useState("");

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

    const searchData = async (word) => {
        setVarSearch(word);
        try {
            const data = await Api.Search(word);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(e) => { searchData(e) }}
                value={varSearch}
                placeholder={"Buscar juego"}
            />
            
        </View>
    )
}

export default Search;
