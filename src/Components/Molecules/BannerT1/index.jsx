import React from 'react';
import { View, Image, Text } from 'react-native';

// Styles
import { styles } from './styles';



const BannerT1 = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.cartImg}
                source={{
                    uri: 'https://res.cloudinary.com/denebv283c/image/upload/v1621895174/AppStoreGame/Group_1_pivjjn.png',
                }}
            />
        </View>
    )
}

export default BannerT1;
