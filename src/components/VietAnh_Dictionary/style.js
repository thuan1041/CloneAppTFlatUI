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
        fontFamily: 'Inder',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 10,
    },

    textBack: {
        fontFamily: 'Inder',
        fontSize: 18,
        color: '#FFFFFF',
        opacity: 0.7
    },

    body: {
        alignItems: 'center',
    },

    searchInput: {
        height: 50,
        width: 375,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        paddingLeft: 40,
        fontFamily: 'Inder',
        fontSize: 18,
        // opacity: 0.7,
    },

    viewSearchInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
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
        fontFamily: 'Inder',
        fontSize: 18,
        opacity: 0.7
    }

});