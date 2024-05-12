import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Color } from '../../themes/colors'
import { Back, spam_icon } from '../../themes/images'
import Header from '../../components/header'




const Results = ({navigation}) => {
  return (
<View style={styles.app_cont}>
    <Header
    title="result"
    source={Back}
    ONPRESS={()=>navigation.goBack()}
    />
    <View style={styles.container}>
    
    <View style={styles.box}>
      
    <View style={styles.protect_mailk}>
    <Image source={spam_icon}
    style={styles.spam_icon} />
    </View>
    
    </View>
      
    
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  app_cont:{
    flex:1
  },
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