import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';

// Styles
import { styles } from './styles';
import CardImg from '../../Atoms/CardImgT1';

//Api
import Api from '../../Api';

class TopSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Sales: null,
        };

        this.sales = this.sales.bind(this);
        this.actionCard = this.actionCard.bind(this);
    }

    sales = async () => {
        const data = await Api.Sales(5);
        if (data.response) {
            this.setState({ Sales: data.data });
        } else {
            console.log(data);
        }
    }

    actionCard = async (id) => {
        console.log(id);
    }

    componentDidMount() {
        this.sales();
    }

    render() {
        const { Sales } = this.state;

        return (
            <>
                <Text style={styles.titleTop} >Top Ventas</Text>
                <View style={styles.containerList}>
                    <FlatList
                        data={Sales}
                        renderItem={({ item, index }) => (
                            <CardImg imgURL={item.imgURL} action={() => { this.actionCard(item._id) }} />
                        )}
                        keyExtractor={item => item._id}
                        ItemSeparatorComponent={() => (
                            <View style={styles.separator} />
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        refreshing={false}
                        onRefresh={() => this.sales()}
                    />
                </View>
            </>

        )
    }
}

export default TopSales;