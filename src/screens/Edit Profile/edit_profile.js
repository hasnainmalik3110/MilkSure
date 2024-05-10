import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { camera_icon, imranKhan, msg_icon } from '../../themes/images'
import { Color } from '../../themes/colors'
import Custom_Input from '../../components/custom_input'
import Custom_btn from '../../components/custom_btn'

const EditProfile = () => {
    const [name, setname] = useState()
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.profile_view}>
      <Image source={imranKhan} style={styles.profile} />
      <TouchableOpacity style={styles.camera_btn}>
      <Image source={camera_icon} style={styles.camera} />
      </TouchableOpacity>
      </View>
      <Custom_Input
        value={name}
        onChangeText={txt => {
          setname(txt);
        }}
        placeholder="Enter name"
        leftImage={msg_icon}
        rightImage={msg_icon}
      />


      <Custom_Input
        value={name}
        onChangeText={txt => {
          setname(txt);
        }}
        placeholder="Enter name"
        leftImage={msg_icon}
        rightImage={msg_icon}
      />


      <Custom_Input
        value={name}
        onChangeText={txt => {
          setname(txt);
        }}
        placeholder="Enter name"
        leftImage={msg_icon}
        rightImage={msg_icon}
      />
      <View style={styles.btn_view} ></View>
      <Custom_btn title="update" 
      
      />
      </ScrollView>

    </View>
  )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        padding:'5%',
        backgroundColor:Color.bg_clr
        
    },
    profile_view:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:300
        
        
    },
    profile:{
        width:'60%',
        height:'60%',
        borderRadius:100,
        resizeMode:'contain' 
    },
    camera:{
        width:'80%',
        height:'80%',
        tintColor:Color.primary,
        resizeMode:'contain' 
    },
    camera_btn:{
        
        height:50,
        width:50,
        borderRadius:100,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        bottom:"20%",
        left:'19%',
        padding:'0.3%',
        borderColor:Color.primary
    },
    btn_view:{
        marginTop:'20%',
        marginEnd:'10%'
    }
})
export default EditProfile