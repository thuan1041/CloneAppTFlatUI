import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E6E6E6',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerWrapper:{
        width:"100%",
        height:100,
        backgroundColor:"rgba(1, 86, 167, 1)",
        flexDirection:"row",
        alignItems:"center",
    },
    preWrapper:{
        flexDirection:"row",
        justifyContent:"flex-start",
        marginLeft:10
    },
    preImg:{
        width:12,
        height:20
    },
    preTxt:{
        fontFamily:"Inter",
        fontWeight:300,
        fontSize:18,
        color:"rgba(255, 255, 255, 1)",
        opacity:0.8,
        marginLeft:4
    },
    headerTxt:{
        fontFamily:"Inter",
        fontWeight:500,
        fontSize:24.2,
        color:"rgba(255, 255, 255, 1)",
        marginLeft:38
    },
    inputWrapper:{
        backgroundColor:"background: rgba(250, 250, 250, 1)",
        width:"95%",
        height:150,
        marginTop:10,
        borderRadius:10,
        position:"relative"
    },
    inputTxt:{
        fontFamily:"Inter",
        fontSize:16,
        fontWeight:400,
        opacity:0.6,
        padding:10,
    },
    inputIcon:{
        width:20,
        height:25,
        position:"absolute",
        right:10,
        top:58,
        padding:10
    },
    optionWrapper:{
        width:"100%",
        height:60,
        flexDirection:'row',
        justifyContent:"flex-end",
        alignItems:"center",
        marginRight:20,
        marginTop:20
    },
    optionImg:{
        padding:10,
        borderColor:"rgba(1, 86, 167, 1)",
        borderWidth:1,
        borderRadius:10,
        marginLeft:10,
        marginRight:10
    },
    btnChoiceWrapper:{
        width:"95%",
        height:52,
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20

    },
    btnWrapper:{
        backgroundColor:"rgba(1, 86, 167, 1)",
        width:"46%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    btnTxt:{
        color:"rgba(255, 255, 255, 1)",
        fontFamily:"Inter",
        fontSize:20,
        fontWeight:500
    },
    optionImgTrash:{
        marginLeft:285,
        marginTop:30
    },
    footertWrapper:{
        width:"95%",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"rgba(255, 255, 255, 1)",
        borderRadius:10,
        height:72,
        alignItems:"center",
        marginTop:20
    },
    resultWrapper:{
        width:"70%",
        marginLeft:10,
        
    },
    resultTxt:{
        fontFamily:"Inter",
        fontWeight:400,
        fontSize:18,

    },
    iconWrapper:{
        width:"30%",
        paddingRight:20,
        flexDirection:"row",
        justifyContent:"space-around",
    }
})