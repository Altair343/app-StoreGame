import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

import TopSales from '../../Molecules/TopSales';
import ListAllGames from '../../Molecules/ListAllGames';
import BannerT1 from '../../Molecules/BannerT1';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            title: "Home",
            headerStyle: {
                backgroundColor: varStyles.color.primaryColor,
            },
            headerTintColor: varStyles.grey.white,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <BannerT1 />
                    <TopSales />
                    <ListAllGames />
                </ScrollView>
            </View>
        )
    }
}

export default Home;