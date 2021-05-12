import { StyleSheet } from 'react-native';
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    separator: {
        width: 20
    },
    containerList: {
        width: '100%',
        overflow: 'hidden',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    titleTop:{
        fontSize: 20,
        fontWeight:'bold',
        paddingVertical:5,
        paddingLeft:10,
        color:varStyles.grey.G400,
    },
});