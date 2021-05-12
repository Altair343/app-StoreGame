import { StyleSheet } from 'react-native';

// Styles conguration
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.grey.G900,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formControl: {
        width: '95%',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    contentLink: {
        width: '100%',
        display: 'flex',
        paddingVertical: 5,
        paddingTop:20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textLink: {
        color: varStyles.color.primaryColor,
    },
    textLinkDisable: {
        color: varStyles.grey.G700,
    },
});
