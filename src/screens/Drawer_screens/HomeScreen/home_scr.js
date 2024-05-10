import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../../themes/colors'
import { Fonts } from '../../../themes/fonts'
import { upload_img } from '../../../themes/images'
import ImagePicker from 'react-native-image-crop-picker';



const Home_scr = ({navigation}) => {


  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then((image) => {
      navigation.navigate('ProcessingScreen', { selectedImage: image });
    }).catch((error) => {
      console.log('Error picking image:', error);
    });
  };

  return (
    <View style={styles.container}>

    <Text style={styles.milk_txt}>
       MILK {"\n"}
      ADULTERATION {'\n'}
      DETECTION
     </Text>

    <TouchableOpacity style={styles.upload_btn}
   onPress={openImagePicker}
    >
    <Image source={upload_img} style={styles.upload_img}
    />
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
    },
    selectedImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    selectedImage: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
      borderRadius: 10,
    },
})
export default Home_scr
