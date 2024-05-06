import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../themes/colors'
import { Fonts } from '../themes/fonts'

const Custom_btn = ({Style, title, ONPress}) => {
  return (
    <View style={styles.btn}>
      <TouchableOpacity style={[styles.container, Style]}
      onPress={ONPress}
      >
      <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    btn:{
        backgroundColor:Color.primary,
        height:50,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:10,
        width:'85%',
        height:58,
        marginVertical:20
    },
    txt:{
        color:Color.white_b,
        fontSize:16,
        fontFamily:Fonts.SF_Bold,
        fontWeight:'bold'
        
    }
})

export default Custom_btn