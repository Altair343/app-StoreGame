import React, { Component } from 'react'
import { View, FlatList, TextInput } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

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
            GameSearch: "",
        };

        this.searchData = this.searchData.bind(this);
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

    searchData = async (word) => {
        this.setState({ Counter: 0 });
        this.setState({ GameSearch: word });

        const data = await Api.Search(word || "");

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
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: 'DetailsGame',
                params: { idGame: id },
            })
        );


    }


    componentDidMount() {
        this.props.navigation.setOptions({
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
    }


    
    renderItem = ({ item, index }) => (
        <View style={styles.separatorColum}>
            <CardImg imgURL={item.imgURL} action={() => { this.actionCard(item._id) }} />
        </View>
    );


    render() {
        const { ListGame, GameSearch } = this.state;

        return (
            <>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => { this.searchData(e) }}
                        value={GameSearch}
                        placeholder={"Buscar juego"}
                    />
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
                </View>
            </>

        )
    }
}

export default ListCategory;