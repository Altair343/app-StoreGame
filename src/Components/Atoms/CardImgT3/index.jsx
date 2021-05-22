import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';


function CardImg3({ imgURL }) {
    return (
        <Image
            style={styles.cartImg}
            source={{
                uri: imgURL,
            }}
        />
    );
}

export default CardImg3;