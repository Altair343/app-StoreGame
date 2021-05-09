import React, { Component } from 'react'
import { View } from 'react-native';

// Styles
import { styles } from './styles';
import TopSales from '../../Molecules/TopSales';

//Api
import Api from '../../Api';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <TopSales />
                </View>
            </View>

        )
    }
}

export default Home;