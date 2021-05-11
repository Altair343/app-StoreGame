import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

// Styles
import { styles } from './styles';
import CardImg from '../../Atoms/CardImgT1';

//Api
import Api from '../../Api';

class ListAllGames extends Component {
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
        const end = Counter + 4;
        const slice = DataGame.slice(Counter, end);
        this.setState({ ListGame: [...ListGame, ...slice] });
        this.setState({ Counter: end });
    }

    SearchData = async () => {
        this.setState({ Counter: 0 });
        const data = await Api.GetAll();

        if (data.response) {
            this.setState({ DataGame: data.data });
            const { DataGame, Counter } = this.state;
            const end = Counter + 4;
            const slice = DataGame.slice(Counter, end);
            this.setState({ ListGame: slice });
            this.setState({ Counter: end });

        } else {
            console.log(data);
        }
    }


    actionCard = async (id) => {
        this.props.navigation.navigate('DetailsGame', { idGame: id });
    }


    componentDidMount() {
        this.SearchData();
    }

    renderItem = ({ item, index }) => (
        <CardImg imgURL={item.imgURL} action={() => { this.actionCard(item._id) }} />
    );


    render() {
        const { ListGame } = this.state;
        return (
            <>
                <Text style={styles.titleTop} >Todos los juegos</Text>
                <View style={styles.containerList}>
                    <FlatList
                        data={ListGame}
                        renderItem={this.renderItem}
                        keyExtractor={item => item._id}
                        ItemSeparatorComponent={() => (
                            <View style={styles.separator} />
                        )}
                        onEndReached={() => this.getData()}
                        refreshing={false}
                        onRefresh={() => this.SearchData()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
            </>
        )
    }
}

export default ListAllGames;