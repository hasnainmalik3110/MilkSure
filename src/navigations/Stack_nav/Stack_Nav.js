import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/Authentication/Splash/index";
import Login from "../../screens/Authentication/Login/index";
import Signup from "../../screens/Authentication/Sign up";
import Home from "../../screens/Home/home_screen/home";
import Processing from "../../screens/Processing";
import Results from "../../screens/results/results";


const Stack=createNativeStackNavigator();

const StackNav=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen"     component={Splash}    options={{headerShown:false}}/>
        <Stack.Screen name="Sign_upScreen"     component={Signup}    options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen"     component={Login}    options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen"     component={Home}    options={{headerShown:false}}/>
        <Stack.Screen name="ProcessingScreen"     component={Processing}    options={{headerShown:false}}/>
        <Stack.Screen name="ResultScreen"     component={Results}    options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav