import { StyleSheet } from 'react-native';
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.grey.G900,
        paddingHorizontal: 4,
    },
    input:{
        backgroundColor: varStyles.grey.G800,
        color: varStyles.grey.G600,
        paddingVertical:5,
        paddingHorizontal:8,
    },


    separator: {
        width: '100%',
        height: 20,
    },
    containerList: {
        width: '100%',
        display:'flex',
        justifyContent: 'space-evenly',
        height:'100%',
        paddingVertical: 5,

    },
  
    separatorColum:{
        paddingRight:20,
    }
});