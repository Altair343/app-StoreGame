import React, { Component } from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

//Api
import Api from '../../Api';

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = {
            DataLibrary: null,
            ListLibrary: null,
            Counter: 0,
        };

        this.SearchLibrary = this.SearchLibrary.bind(this);
    }

    getData = () => {
        const { ListLibrary, DataLibrary, Counter } = this.state;

        const end = Counter + 6;
        const slice = DataLibrary.slice(Counter, end);
        this.setState({ ListLibrary: [...ListLibrary, ...slice] });
        this.setState({ Counter: end });
    }

    SearchLibrary = async () => {
        this.setState({ Counter: 0 });
        const data = await Api.LibraryUser();

        if (data.response) {
            this.setState({ DataLibrary: data.data });
            const { DataLibrary, Counter } = this.state;

            const end = Counter + 12;
            const slice = DataLibrary.slice(Counter, end);
            this.setState({ ListLibrary: slice });
            this.setState({ Counter: end });

        } else {
            console.log(data);
        }

    }

    componentDidMount() {
        this.props.navigation.setOptions({
            title: "Biblioteca",
            headerStyle: {
                backgroundColor: varStyles.grey.G900,
            },
            headerTintColor: varStyles.grey.G600,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        })

        this.SearchLibrary();
    }

    renderItem = ({ item, index }) => (
        <View style={styles.separatorColum}>
            <Text> componene 1</Text>
        </View>
    );

    render() {
        const { ListLibrary } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={ListLibrary}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                    onEndReached={() => this.getData()}
                    refreshing={false}
                    onRefresh={() => this.SearchLibrary()}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                />
            </View>
        )
    }
}

export default Library;