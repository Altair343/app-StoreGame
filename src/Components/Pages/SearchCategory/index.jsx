import React, { useLayoutEffect } from 'react';
import { View, } from 'react-native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

import ListCategory from '../../Molecules/ListCategory';
const Search = ({ navigation, route }) => {
    const { nameCat } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.nameCat,
            headerStyle: styles.headerStyle,
            headerTintColor: varStyles.grey.G600,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        })
    }, [navigation])


    return (
        <View style={styles.container}>
            <ListCategory category={nameCat} navigation={navigation} />
        </View>
    )
}

export default Search;