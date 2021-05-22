import { StyleSheet } from 'react-native';
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.grey.G900,
    },
    separator: {
        width: '100%',
        height: 20,
    },
    modalize__content: {
        zIndex: 5,
        backgroundColor: varStyles.grey.white,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        borderRadius:10,
    },
});
