import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

// Styles
import { styles } from './styles';

//Api
import Api from '../../Api';


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

    }, [])

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
            
        </View>
    )
}

export default Search;


{/* <Text> {game.title ? `${game.title}` : ``}</Text> */}