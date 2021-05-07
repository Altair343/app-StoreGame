import React, { Component } from 'react'
import { Text, View } from 'react-native';

// Styles
import { styles } from './styles';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>!Register!</Text>
            </View>
        )
    }
}

export default Register;
