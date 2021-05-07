import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

// Styles
import { styles } from './styles';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>!Login!</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        )
    }
}

export default Login;
