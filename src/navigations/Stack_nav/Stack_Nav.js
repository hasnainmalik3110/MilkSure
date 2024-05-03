import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/Authentication/Splash/index";
import Login from "../../screens/Authentication/Login/index";

const Stack=createNativeStackNavigator();

const StackNav=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="SplashScreen"     component={Splash}    options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen"     component={Login}    options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNav