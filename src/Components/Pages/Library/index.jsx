import React, { Component } from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { WebView } from 'react-native-webview';

// Styles
import { styles } from './styles';
import varStyles from '../../../assets/styles/VarStyles';

//Components
import CardLibray from '../../Molecules/CardLibray';

//Api
import Api from '../../Api';

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = {
            DataLibrary: null,
            ListLibrary: null,
            Counter: 0,
            stateTicket: 'https://www.google.com.mx/',
        };

        this.webViewRef = React.createRef(null);
        this.modalizeRef = React.createRef(null);

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

    onPressModal = (ticket) => {
        this.setState({ stateTicket: ticket });
        this.modalizeRef.current?.open();
    };

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

    render() {
        const { ListLibrary, stateTicket } = this.state;

        return (
            <>
                <View style={styles.container}>
                    <FlatList
                        data={ListLibrary}
                        renderItem={({ item, index }) => (
                            <CardLibray
                                imgURLPro={item.ProductId.imgURL}
                                action={() => { this.onPressModal(item.receiptUrl) }}
                                serialGame={item.serialGame}
                                amount={item.amount}
                            />
                        )}
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
                <Modalize
                    ref={this.modalizeRef}
                    modalStyle={styles.modalize__content}
                >
                    <WebView
                        ref={this.webViewRef}
                        source={{ uri: `${stateTicket}` }}
                        showsVerticalScrollIndicator={false}
                        containerStyle={{ height: 800 }}
                    />
                </Modalize>
            </>
        )
    }
}

export default Library;