import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Fonts } from "./src/themes/fonts";
import StackNav from "./src/navigations/Stack_nav/Stack_Nav";

const App=()=>{
  return(
    
    <View style={{flex:1}}>
      <StatusBar backgroundColor="#f5f5f5" barStyle='default'/>
      <StackNav />
      
          </View>
  )
}
export default App