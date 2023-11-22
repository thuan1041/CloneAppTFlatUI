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
        justifyContent: 'space-between',
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
        // fontFamily: 'Inter',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: -80,
    },

    textBack: {
        // fontFamily: 'Inter',
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
        // fontFamily: 'Inter',
        fontSize: 18,
        // opacity: 0.7,
    },

    viewSearchInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    }

});