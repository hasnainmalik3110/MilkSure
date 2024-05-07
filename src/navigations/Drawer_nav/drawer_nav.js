import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home_scr from '../../screens/Drawer_screens/HomeScreen/home_scr'
import CustomDrawerContent from '../../screens/Drawer_screens/Drawer/custon_drawer_Content'
 
const Drawer = createDrawerNavigator()

const Drawer_nav = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name='Home'    component={Home_scr} />
    </Drawer.Navigator>
  )
}

export default Drawer_nav