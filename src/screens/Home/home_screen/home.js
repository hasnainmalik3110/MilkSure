import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../../../themes/colors'
import Drawer_nav from '../../../navigations/Drawer_nav/drawer_nav'
import Header from '../../../components/header'
import { Back, drawer_icon } from '../../../themes/images'
import { DrawerActions } from '@react-navigation/native'

const Home = () => {
  return (
    <View style={{flex:1, backgroundColor:Color.bg_clr}}>
    <Drawer_nav />
    </View>
  )
}

export default Home