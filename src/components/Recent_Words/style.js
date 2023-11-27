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
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
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
        marginLeft: 8, 
        marginRight: 8,
        marginTop:8,
        marginBottom: 120,
    },
    
    searchInput: {
        height: 50,
        width: 375,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        paddingLeft: 40,
        // fontFamily: 'Inter',
        fontSize: 18,
    },

    viewSearchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 110,
    },

    viewItem: {
        alignItems: 'center',
        height: 100,
        width: 375,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: 1,
        
    },

    textWord: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    textMean: {
        fontSize: 16,
        fontWeight: '400'
    },

    viewFunc: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    volOP: {
        marginRight: 15,
        marginTop: -30,
    },

    volStar: {
        marginRight: 20,
        marginTop: -30,
    },

    footer: {
        width: '100%',
        height: 120,
        backgroundColor: '#E6E6E6',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-around',
        zIndex: 10,
    },

    buttonFooter: {
        width: 85, 
        height: 42,
        borderRadius: 8,
        backgroundColor: '#0156A7',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    textFooter: {
        fontSize: 16,
        color: '#FFFFFF',
    }
});