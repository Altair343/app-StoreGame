import { StyleSheet } from 'react-native';

// Styles conguration
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    button:{
        width: '100%',
        paddingVertical: 10,
        backgroundColor: varStyles.color.primaryColor,
        borderRadius:7,
        marginTop: 20,
        justifyContent: 'center',
		alignItems: 'center',
    },
    textButton:{
        color: '#FFF',
		fontSize: 14,
		fontWeight: 'bold',
    }
});
