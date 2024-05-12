import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const Splash = ({ navigation }) => {
  const navigateToNextScreen = () => {
    navigation.navigate('Sign_upScreen');
  };

  setTimeout(() => {
    navigateToNextScreen();
  }, 2000);

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToNextScreen}>
      <Image
        source={require('../../../assets/images/splash_image.png')}
        style={styles.img}
      />
      <Text style={styles.ml_txt}>MILK SURE</Text>
      <Text style={styles.adlt_txt}>MILK ADULTRATION DETECTION</Text>
    </TouchableOpacity>
  )
}

export default Splash
