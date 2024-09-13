// Signup.js
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { bg_img, box, check_box, hidden_eye, lock_icon, msg_icon, profile_icon, remember_tick } from '../../../themes/images';
import { Color } from '../../../themes/colors';
import Custom_Input from '../../../components/custom_input';
import Custom_btn from '../../../components/custom_btn';
import { Fonts } from '../../../themes/fonts';

const Signup = ({ navigation }) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [checked, setchecked] = useState(true);

    const CheckPassword = () => {
        setchecked(!checked);
    };

   

    return (
        <KeyboardAvoidingView style={styles.container}>
            
                <ScrollView>
                    <Text style={styles.ml_text}>MILK SURE</Text>
                    <Text style={styles.wlcm_txt}>Welcome Back!</Text>
                    <Text style={styles.signIn_txt}>Sign up to continue</Text>

                    <Custom_Input
                        value={name}
                        onChangeText={txt => {
                            setname(txt);
                        }}
                        placeholder="Name"
                        leftImage={profile_icon}
                    />

                    <Custom_Input
                        value={email}
                        onChangeText={txt => {
                            setemail(txt);
                        }}
                        placeholder="abcd123456789@Kfeit.edu.pk"
                        leftImage={msg_icon}
                    />

                    <Custom_Input
                        value={password}
                        onChangeText={txt => {
                            setpassword(txt);
                        }}
                        placeholder="Password"
                        leftImage={lock_icon}
                        rightImage={msg_icon}
                        secureTextEntry={true}
                    />

                    <Custom_Input
                        value={confirmPassword}
                        onChangeText={txt => {
                            setconfirmPassword(txt);
                        }}
                        placeholder="confirm Password"
                        leftImage={lock_icon}
                        rightImage={hidden_eye}
                        secureTextEntry={true}
                    />

                    <View style={styles.check_view}>
                        <TouchableOpacity onPress={CheckPassword}>
                      
                            {checked ? (
                                <Image source={box} style={styles.box_icon} />
                            ) : (
                                <Image source={check_box} style={styles.box_icon} />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.rm_text}>I Agree to the MilkSure's</Text>
                          
                        <TouchableOpacity>
                            <Text style={styles.fp_text}>Term & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <Custom_btn
                        title="sign up"
                        ONPress={() => navigation.navigate('LoginScreen')}
                    />

                   
                    <TouchableOpacity style={styles.guest_view} onPress={()=>navigation.navigate('LoginScreen')}>
                        <Text style={styles.guest_txt}>Already have an account?</Text>
                    </TouchableOpacity>
                </ScrollView>
           
        </KeyboardAvoidingView>
    );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.bg_clr,
    paddingHorizontal:"5%",
    
    
  },
  bg_img: {
    justifyContent:"flex-end",
    resizeMode:'cover',
    
    
    
  },
  ml_text: {
    alignSelf: 'center',
    fontFamily: Fonts.R_Black,
    color: 'black',
    fontSize: 30,
    paddingTop: '22%',
  },
  wlcm_txt: {
    alignSelf: 'center',
    paddingTop: '8%',
    fontFamily: Fonts.R_Bold,
    color: 'red',
    fontSize: 18,
  },
  signIn_txt: {
    alignSelf: 'center',
    paddingTop: 1,
    paddingBottom: 35,
    fontFamily: Fonts.R_Bold,
    color: 'black',
    fontSize: 16,
  },
  email_input_view: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: '8%',
    alignItems: 'center',
    borderRadius: 10,
  },
  email_input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 14,
  },
  Active_input: {
    borderWidth: 2,
    borderColor: '#C32727',
  },
  msg_icon: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  box_icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Color.primary,
  },
  check_view: {
    flexDirection: 'row',
    marginTop:"3%",
    marginBottom:'15%'
  },
  rm_text: {
    color: Color.BLACK,
    marginHorizontal: 5,
    fontSize: 14,
    fontFamily: Fonts.SF_Bold,
  },
  fp_text: {
    color: Color.primary,
    fontSize: 14,
    fontFamily: Fonts.SF_Bold,
  },
  no_acc_txt:{
    color: Color.grey2,
    paddingHorizontal: 5,
    fontSize: 14,
    fontFamily:Fonts.SF_Bold

  },
  reg_view:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:Fonts.SF_Bold,
    fontWeight:'bold'
  },
  reg_txt:{
    color: Color.primary,
    textDecorationLine:'underline',
    fontSize: 14,
    lineHeight:16
  },
  guest_txt:{
    color: Color.BLACK,
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:16,
    lineHeight:18,
    letterSpacing:1,
    fontFamily:Fonts.SF_Bold,
  },
  guest_view:{
    marginVertical:'13%',
  },

});

export default Signup;
