import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home_scr from '../../screens/Drawer_screens/HomeScreen/home_scr'
import CustomDrawerContent from '../../screens/Drawer_screens/Drawer/custon_drawer_Content'
import TermsAndConditions from '../../screens/Terms and Conditions/termsANDconditions'
import { Color } from '../../themes/colors'
import Contacts from '../../screens/contacts'
import EditProfile from '../../screens/Edit Profile/edit_profile'
import { NavigationContainer } from '@react-navigation/native'
 
const Drawer = createDrawerNavigator()

const Drawer_nav = () => {
  return (
   
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} 
    />} 
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.bg_clr, 
      },
        headerTintColor:Color.primary, 
    }}
    >
    <Drawer.Screen name='Home'                        component={Home_scr} />
    <Drawer.Screen name='TermsAndConditionsScreen'    component={TermsAndConditions} options={{headerTitle:'Terms & Conditions'}}/>
    <Drawer.Screen name='ContactScreen'               component={Contacts}           options={{headerTitle:'Contact us'}}/>
    <Drawer.Screen name='ProfileScreen'               component={EditProfile}        options={{headerTitle:'Edit Profile'}}/>
    </Drawer.Navigator>
  
  )
}

export default Drawer_nav