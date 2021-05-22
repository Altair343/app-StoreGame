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
        width: '63%',
        color: varStyles.grey.G500,
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 20,
    },
    price: {
        color: varStyles.grey.G500,
        fontWeight: 'bold',
        fontSize: 20,

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
    containerModal: {
        backgroundColor: varStyles.grey.white,
    },
    modalize__content: {
        zIndex: 5,
        marginTop: 'auto',
        backgroundColor: varStyles.grey.G900,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
    },
    sectionInfo: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 10,
        borderColor: varStyles.grey.G600,
    },
    sectionInfo2: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: varStyles.grey.G600,
    },
    sectionPay: {
        paddingHorizontal: 20,
    },
});