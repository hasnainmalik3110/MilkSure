import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { bg_img, logo } from '../../../themes/images';

const Splash = ({ navigation }) => {
  const navigateToNextScreen = () => {
    navigation.navigate('Sign_upScreen');
  };

  setTimeout(() => {
    
  },1000 );

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToNextScreen}>
      <Image
        source={require('../../../assets/images/splash_image.png')}
        style={styles.img}
      />
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.ml_txt}>MILK SURE</Text>
      <Text style={styles.adlt_txt}>MILK ADULTRATION DETECTION</Text>
      <Image
        source={bg_img}
        style={styles.bg_image}
      />
    </TouchableOpacity>
  )
}

export default Splash
