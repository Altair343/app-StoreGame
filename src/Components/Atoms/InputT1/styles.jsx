import { StyleSheet } from 'react-native';

// Styles conguration
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    formLabel: {
        width: '100%',
        paddingBottom: 4,
        color: varStyles.grey.G600,
    },
    input: {
        width: '100%',
        paddingVertical: 5,
        paddingLeft: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: varStyles.grey.G800,
        color: varStyles.grey.G500,
    }
});
