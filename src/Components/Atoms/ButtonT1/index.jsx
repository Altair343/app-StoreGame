import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

function ButtonT1({ title, action }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={action}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonT1;