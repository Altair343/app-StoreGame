import React from 'react';
import { TextInput, Text } from 'react-native';

import { styles } from './styles';

function Input({ title,value,  custom }) {
    return (
        <>
            <Text style={styles.formLabel} >{title}</Text>
            <TextInput
                style={styles.input}
                value={value}
                {...custom}
            />
        </>
    );
}

export default Input;