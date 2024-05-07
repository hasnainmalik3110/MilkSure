import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Color } from '../../../themes/colors'
import { Fonts } from '../../../themes/fonts'
import { upload_img } from '../../../themes/images'

const Home_scr = () => {
  return (
    <View style={styles.container}>

    <Text style={styles.milk_txt}>
       MILK {"\n"}
      ADULTERATION {'\n'}
      DETECTION
     </Text>

    <TouchableOpacity style={styles.upload_btn}>
    <Image source={upload_img} style={styles.upload_img}/>
    <Text style={styles.upload_txt}>DETECTION</Text>
    </TouchableOpacity>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.bg_clr,
        padding:"5%",
        justifyContent:'space-between',
    },
    milk_txt:{
     fontSize:20,
     color:"red",
     lineHeight:30,
     marginVertical:"3%",
     letterSpacing:0.3,
    },
    upload_btn:{
        width:"100%",
        height:200,
        borderColor:'red',
        borderWidth:2,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"  
    },
    upload_img:{
       width:100,height:100,resizeMode:"contain",
        
    },
    upload_txt:{
        fontSize:36,
        color:"red",
        lineHeight:40,
        marginVertical:"3%",
        letterSpacing:0.3,
        fontFamily:Fonts.R_Bold
    }
})
export default Home_scr