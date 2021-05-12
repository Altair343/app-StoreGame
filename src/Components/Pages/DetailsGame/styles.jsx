import { StyleSheet } from 'react-native';
import varStyles from '../../../assets/styles/VarStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.grey.G900,
        paddingTop: 30,
        paddingHorizontal: 10,
    },
    headerStyle: {
        backgroundColor: varStyles.grey.G900,
    },
    section1: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        color: varStyles.grey.G500,
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 20
    },
    detailsTitle: {
        color: varStyles.grey.G500,
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    detailsDescription: {
        color: varStyles.grey.G600,
    },
    detailsContent: {
        paddingVertical: 20
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
    },
});