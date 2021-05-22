import { StyleSheet } from 'react-native';
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    contentCard: {
        width: '94%',
        marginHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
    },

    contentInfo: {
        width: '82%',
        paddingLeft: 8,
    },

    text: {
        color: varStyles.grey.G500,
        fontSize: 13,
    },
    textTikect: {
        color: varStyles.color.primaryColor,
        fontSize: 13,
    },
    contentInfoSer:{
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
    },
});
