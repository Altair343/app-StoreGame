import React, { Component } from 'react'
import { View, ScrollView } from 'react-native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

import TopSales from '../../Molecules/TopSales';
import ListAllGames from '../../Molecules/ListAllGames';
import Category from '../../Molecules/Category';
import BannerT1 from '../../Molecules/BannerT1';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            title: "Home",
            headerStyle: {
                backgroundColor: varStyles.grey.G900,
            },
            headerTintColor: varStyles.grey.G600,
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
                    <TopSales navigation={this.props.navigation} />
                    <ListAllGames navigation={this.props.navigation} />
                    <Category navigation={this.props.navigation} category={'Acción'} />
                    <Category navigation={this.props.navigation} category={'Anime'} />
                    <Category navigation={this.props.navigation} category={'Rol'} />
                </ScrollView>
            </View>
        )
    }
}

export default Home;