import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fonts } from '../../../themes/fonts';

const Login = () => {
   

    return (
        <View style={styles.container}>
            <Text style={styles.ml_text}>MILK SURE</Text>
            <Text style={styles.wlcm_txt}>Welcome Back!</Text>
            <Text style={styles.signIn_txt}>Sign in to your account</Text>

            <View style={styles.email_input_view}>
           
                <Image
                    source={require('../../../assets/icons/Message.png')}
                    style={styles.msg_icon}
                />
                <TextInput
                    style={styles.email_input}
                    placeholder='abc@gmail.com'
                    placeholderTextColor='#9E9E9E'
                    
                />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ml_text: {
        alignSelf: 'center',
        fontFamily: Fonts.R_Black,
        color: 'black',
        fontSize: 36,
        paddingTop: 98,
    },
    wlcm_txt: {
        alignSelf: 'center',
        paddingTop: 70,
        fontFamily: Fonts.R_Bold,
        color: 'red',
        fontSize: 22,
    },
    signIn_txt: {
        alignSelf: 'center',
        paddingTop: 3,
        fontFamily: Fonts.R_Bold,
        color: 'black',
        fontSize: 18,
    },
    email_input_view: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10, 
    },
    email_input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        color:'black',
        fontSize:14
    },
    msg_icon: {
        marginHorizontal: 10,
        width: 20,
        height: 20,
        
    },
});

export default Login;
