

import { StyleSheet } from 'react-native';

// Styles conguration
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        marginHorizontal: 5,
        borderRadius: 20,
        borderWidth:1,
        borderColor: varStyles.grey.G600,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: varStyles.grey.G600,
        fontSize: 12,
        fontWeight: 'bold',
    }
});
