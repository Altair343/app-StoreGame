import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

function Button({ imgURL, action }) {
    return (
        <TouchableOpacity
            onPress={action}
        >
            <Image
                style={styles.cartImg}
                source={{
                    uri: imgURL,
                }}
            />
        </TouchableOpacity>
    );
}

export default Button;