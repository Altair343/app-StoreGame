import React, { Component } from 'react'
import { View, FlatList } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// Styles
import { styles } from './styles';
import CardImg from '../../Atoms/CardImgT1';

//Api
import Api from '../../Api';

class ListCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            DataGame: null,
            ListGame: null,
            Counter: 0,
        };

        this.SearchData = this.SearchData.bind(this);
        this.getData = this.getData.bind(this);
        this.actionCard = this.actionCard.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    getData = () => {
        const { ListGame, DataGame, Counter } = this.state;

        const end = Counter + 6;
        const slice = DataGame.slice(Counter, end);
        this.setState({ ListGame: [...ListGame, ...slice] });
        this.setState({ Counter: end });
    }

    SearchData = async () => {
        this.setState({ Counter: 0 });
        const data = await Api.Categories(this.props.category);

        if (data.response) {
            this.setState({ DataGame: data.data });


            const { DataGame, Counter } = this.state;


            const end = Counter + 12;
            const slice = DataGame.slice(Counter, end);
            this.setState({ ListGame: slice });
            this.setState({ Counter: end });

        } else {
            console.log(data);
        }
    }


    actionCard = (id) => {
        //this.props.navigation.navigate('DetailsGame', { idGame: id });

        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: 'DetailsGame',
                params: { idGame: id },
            })
        );


    }


    componentDidMount() {
        this.SearchData();
    }

    renderItem = ({ item, index }) => (
        <View style={styles.separatorColum}>
            <CardImg imgURL={item.imgURL} action={() => { this.actionCard(item._id) }} />
        </View>
    );


    render() {
        const { ListGame } = this.state;

        return (
            <>
                <View style={styles.containerList}>
                    <FlatList
                        data={ListGame}
                        renderItem={this.renderItem}
                        keyExtractor={item => item._id}
                        ItemSeparatorComponent={() => (
                            <View style={styles.separator} />
                        )}
                        onEndReached={() => this.getData()}
                        numColumns={3}
                        refreshing={false}
                        onRefresh={() => this.SearchData()}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                    />
                </View>
            </>

        )
    }
}

export default ListCategory;