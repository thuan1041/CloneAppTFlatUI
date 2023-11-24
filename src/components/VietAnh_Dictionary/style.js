import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    },

    header: {
        backgroundColor: '#0156A7',
        height: 100,
        flexDirection:'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex:10
    },

    back: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },

    icon: {
        color: '#FFFFFF',
    },

    nameHeader: {
        // fontFamily: 'Inder',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 15,
    },

    textBack: {
        // fontFamily: 'Inder',
        fontSize: 18,
        color: '#FFFFFF',
        opacity: 0.7
    },

    body: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 10,
        marginBottom: 40,
    },

    searchInput: {
        height: 50,
        width: 375,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        paddingLeft: 40,
        // fontFamily: 'Inder',
        fontSize: 18,
        opacity: 0.5,
    },

    viewSearchInput: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 110,
    },

    viewAria: {
        marginTop: 10,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        width: 375,
        height: 444,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    textAria: {
        // fontFamily: 'Inder',
        fontSize: 18,
        opacity: 0.7
    },

    btnViewItem: {
        width: 375,
        height:50,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        marginTop: 1,
        justifyContent: 'center',
    },

    textName: {
        fontSize: 16,
        marginLeft: 20,
        fontWeight: '500'
    }
});