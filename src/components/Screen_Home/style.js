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
        backgroundColor: '#0156A7'
    },

    textInHE: {
        backgroundColor: '#FAFAFA',
        width: 344,
        height:45,
        borderRadius: 23,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Inder',
        fontSize: 16,
    }, 
    viewOP: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textOP: {
        fontFamily: 'Inder',
        color: '#FFFFFF',
        fontSize: 14,
        // fontWeight: 'normal'
    },

    viewText: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },

    body: {
        backgroundColor: '#DEDEDE',
        alignItems: 'center',
    },

    body_content: {
        width: 366,
    },

    imgInOP: {
        height: 30, 
        width: 30,
        marginLeft: 10
    },

    buttonOP: {
        height: 44,
        width: 366,
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    }, 
    buttonOP1: {
        height: 44,
        width: 180,
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },

    buttonOP2:{
        height: 90,
        width: 366,
        backgroundColor: '#FAFAFA',
        marginTop: 4,
        borderRadius: 8,
    },

    textInOP: {
        fontFamily: 'Inder',
        fontSize: 16,
        marginLeft: 10
    },

    
})