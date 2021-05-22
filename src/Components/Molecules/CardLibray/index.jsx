import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

import CardImg3 from '../../Atoms/CardImgT3';
import Eye1Icon from '../../Atoms/Eye1Icon';
import Eye2Icon from '../../Atoms/Eye2Icon';

function CardLibrary({ imgURLPro, action, serialGame, amount }) {
    const [ver, setVer] = useState(false);


    return (
        <View style={styles.contentCard}>
            <CardImg3 imgURL={imgURLPro} />
            <View style={styles.contentInfo}>
                <View style={styles.contentInfoSer}>
                    <Text style={styles.text}>{`Serial: ${ver ? `${serialGame}` : `***************`}`}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setVer(!ver);
                        }}
                    >
                        {
                            ver ? <Eye2Icon /> : <Eye1Icon />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>{`MX$ ${amount}`}</Text>
                <TouchableOpacity
                    onPress={action}
                >
                    <Text style={styles.textTikect}>{`Ticket`}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default CardLibrary;