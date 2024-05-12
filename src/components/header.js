import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Back } from '../themes/images'
import { Color } from '../themes/colors'

const Header = ({title,source,ONPRESS}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={ONPRESS}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.text}>{title}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        flexDirection:'row',
        backgroundColor:Color.bg_clr,
        
        
    },
    icon:{
        width:20,
        height:20,
        marginLeft:10,
        marginTop:15,
        resizeMode:'contain',
        tintColor:Color.primary
        
    },
    text:{
      color:Color.primary,
      fontSize:20,
      fontWeight:'bold',
      marginVertical:15,
      marginLeft:15,
      lineHeight:21,
      },
})
export default Header