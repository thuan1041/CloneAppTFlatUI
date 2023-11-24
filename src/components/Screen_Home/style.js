import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    headerTxt:{
        color: '#FFFFFF',
    },

    imgHE: {
        height: 30,
        width: 30
    },

    header: {
        backgroundColor: '#0156A7',
        height: 170,
        width: '100%'
    },

    textInHE: {
        backgroundColor: '#FAFAFA',
        width: 344,
        height:45,
        borderRadius: 23,
        justifyContent: 'center',
        textAlign: 'center',
        // fontFamily: 'Inter',
        fontSize: 16,
    }, 
    viewOP: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },

    textOP: {
        // fontFamily: 'Inter',
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500'
    },

    viewText: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    body: {
        backgroundColor: '#DEDEDE',
        alignItems: 'center',
    },

    body_content: {
        width: '94%',
    },

    imgInOP: {
        height: 30, 
        width: 30,
        marginLeft: 10
    },

    buttonOP: {
        height: 46,
        width: '100%',
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    }, 
    buttonOP1: {
        height: 46,
        width: 180,
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },

    buttonOP2:{
        height: 100,
        width: '100%',
        backgroundColor: '#FAFAFA',
        marginTop: 6,
        borderRadius: 8,
    },

    textInOP: {
        // fontFamily: 'Inter',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500'
    },
})