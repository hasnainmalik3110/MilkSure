import { StyleSheet } from "react-native"
import { Fonts } from '../../../themes/fonts'
import { Color } from "../../../themes/colors"
export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 3,
        backgroundColor:Color.bg_clr,
    },
    img:{
        alignSelf:'center',
        height:309,
        width: 390,
        top:'20%'
    },
    ml_txt:{
        fontSize:36,
        fontFamily:Fonts.L_Regular,
        fontWeight:'bold',
        color:'red',
        alignSelf:'center',
        marginVertical:5,
    },
    adlt_txt:{
        fontSize:20,
        fontFamily:Fonts.R_Black,
        color: 'black',
        alignSelf:'center',  
    },
    logo:{
        height: 70,
        width: 70,
        marginTop:'60%',
        alignSelf:'center',
        resizeMode:'contain'
    },
    bg_image:{
        height: '60%',
        width: '100%',
        position:'absolute',
        bottom:'0%',
        alignSelf:'center',
        zIndex:-1
    }
})