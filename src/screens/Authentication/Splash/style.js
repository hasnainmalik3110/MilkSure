import { StyleSheet } from "react-native"
import { Fonts } from '../../../themes/fonts'
export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 3,
        backgroundColor:'white',
        
    },
    img:{
        alignSelf:'center',
        height:309,
        width: 390,
        top:'20%'
    },
    ml_txt:{
        fontSize:36,
        fontFamily:Fonts.R_Bold,
        color:'red',
        alignSelf:'center',
        paddingTop:200,
    },
    adlt_txt:{
        fontSize:20,
        fontFamily:Fonts.R_Black,
        color: 'black',
        alignSelf:'center',
        paddingTop:10
        
    }
})