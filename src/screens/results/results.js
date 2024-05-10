import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Color } from '../../themes/colors'
import { spam_icon } from '../../themes/images'




const Results = () => {
  return (
    <View style={styles.container}>
    <View style={styles.box}>
      
    <View style={styles.protect_mailk}>
    <Image source={spam_icon}
    style={styles.spam_icon} />
    </View>
    
    </View>
      
    
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:Color.bg_clr,
      padding:'10%'
    },
    box:{
        width:'100%',
        height:'50%',
        backgroundColor:Color.WHITE,
        borderColor:Color.primary,
        borderWidth:2,
        borderRadius:20,
        justifyContent:'flex-end'
    },
    protect_mailk:{
      bottom:0,
      height:'16%',
      width:'100%',
      backgroundColor:Color.primary,
      borderRadius:18,
      

    },
    spam_icon:{
      height:'90%',
      width:'20%',
      alignSelf:'flex-end',
      margin:'1%'
    }
})

export default Results