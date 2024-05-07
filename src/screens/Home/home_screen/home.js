import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../../../themes/colors'
import Drawer_nav from '../../../navigations/Drawer_nav/drawer_nav'

const Home = () => {
  return (
    <View style={{flex:1, backgroundColor:Color.white_b}}>
    <Drawer_nav />

      <Text>H</Text>
    </View>
  )
}

export default Home