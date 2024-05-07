import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Color } from '../../../themes/colors'
import { drawer_icon, home_icon, profile_edit, profile_img } from '../../../themes/images'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Fonts } from '../../../themes/fonts'

const CustomDrawerContent = ({props, navigation}) => {
  return (
    <View style={styles.container}>
    <DrawerContentScrollView {...props}>
    <View style={styles.drawer_cont}>
    <TouchableOpacity style={styles.drawer_icon_btn}
    onPress={()=>navigation.closeDrawer()}>
    <Image source={drawer_icon}
    style={styles.drawer_icon_}
    />
    </TouchableOpacity>

    <View style={styles.profile_pic_view}>
    <Image source={profile_img}
    style={styles.profile_pic}
    />
    <TouchableOpacity>
    <Image source={profile_edit}
    style={styles.profile_edit_icon}
    />
    </TouchableOpacity>
    <View>
    <Text style={styles.name}>IMRAN KHAN</Text>
    <Text style={styles.email}>{'@'}imrankhan804</Text>
    </View>
    

    </View>
    </View>
    <DrawerItem
    style={styles.drawer_itme}
        label="Home"
        
        labelStyle={{
          color: Color.WHITE, // Change to the color you desire
          fontWeight: 'bold', // Change to the font weight you desire
          // Add more styles as needed
        }}
        onPress={() => navigation.navigate('Home')}
        icon={({ focused, color, size }) => (
          <Image
            source={home_icon} 
            style={{ width: 24, height: 24 }}
          />
        )}
      />
    </DrawerContentScrollView>
    
</View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Color.bg_clr
  },
  drawer_cont:{
    backgroundColor:Color.primary,
    
  },
  drawer_itme:{
    backgroundColor:Color.primary,
    color:Color.WHITE
    

  },

drawer_icon_:{
  width:20,
  height:20,
  resizeMode:'contain',
  
  
  
},
drawer_icon_btn:{
  top:'100%',
  left:'8%'
  
  
},
  profile_pic:{
    width:100,
    height:100,
    resizeMode:'contain',
    
    
  },
  profile_pic_view:{
    borderRadius:100,
    marginTop:80,
    marginLeft:20,
    marginBottom:10,
    flexDirection:'row',
    
  
  },
  profile_edit_icon:{
    width:30,
    height:30,
    resizeMode:'contain',
    top:'230%',
    right:'100%'
  },
  name:{
    fontFamily:Fonts.SF_Bold,
    fontWeight:'bold',
    color:Color.WHITE,
    letterSpacing:0.5,
    fontSize:18,
    top:'10%',
    right:'10%',
    padding:5
  },
  email:{
    fontFamily:Fonts.SF_Bold,
    
    color:Color.WHITE,
    letterSpacing:0.5,
    fontSize:15,
    top:'10%',
    right:'10%',
    padding:3,
    textDecorationLine:'underline',
  },
  name_view:{
    flexDirection:'column'
  }
})
export default CustomDrawerContent