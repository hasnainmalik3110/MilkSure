import { Image, Text, View } from 'react-native'
import React from 'react'

import { styles } from './style'

const Splash=({navigation})=>{
  setTimeout(() => {
  
    navigation.navigate('LoginScreen');
}, 2000);
  return (
    <View style={styles.container}>
    <Image source={require('../../../assets/images/splash_image.png')} 
    style={styles.img}
    />
    <Text style={styles.ml_txt}>MILK SURE</Text>
    <Text style={styles.adlt_txt}>MILK ADULTRATION DETECTION</Text>
     
    </View>
  )
}
export default Splash