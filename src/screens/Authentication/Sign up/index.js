import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts} from '../../../themes/fonts';
import {box, msg_icon, remember_tick} from '../../../themes/images';
import {Color, Colors} from '../../../themes/colors';
import Custom_Input from '../../../components/custom_input';
import Custom_btn from '../../../components/custom_btn';

const Signup = ({navigation}) => {

  const [userEmail, setuserEmail] = useState('');
  const [password, setpassword] = useState('');
  const [checked, setchecked] = useState(true);

  const CheckPassword = () => {
    setchecked(!checked);
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.ml_text}>MILK SURE</Text>
      <Text style={styles.wlcm_txt}>Welcome Back!</Text>
      <Text style={styles.signIn_txt}>Sign up to your account</Text>

      <Custom_Input
        value={userEmail}
        onChangeText={txt => {
          setuserEmail(txt);
        }}
        placeholder="Enter Email"
        leftImage={msg_icon}
      />

      <Custom_Input
        value={password}
        onChangeText={txt => {
          setpassword(txt);
        }}
        placeholder="Enter password"
        leftImage={msg_icon}
        rightImage={msg_icon}
      />

      <Custom_Input
        value={password}
        onChangeText={txt => {
          setpassword(txt);
        }}
        placeholder="Enter password"
        leftImage={msg_icon}
        rightImage={msg_icon}
      />

      <Custom_Input
        value={password}
        onChangeText={txt => {
          setpassword(txt);
        }}
        placeholder="Enter password"
        leftImage={msg_icon}
        rightImage={msg_icon}
      />

      <View style={styles.check_view}>
        <TouchableOpacity onPress={CheckPassword}>
          {checked ? (
            <Image source={box} style={styles.box_icon} />
          ) : (
            <Image source={remember_tick} style={styles.box_icon} />
          )}
        </TouchableOpacity>
        <Text style={styles.rm_text}>I Agree to the Bobi's</Text>
        <TouchableOpacity>
          <Text style={styles.fp_text}>Term & Conditions</Text>
        </TouchableOpacity>
      </View>
      <Custom_btn title="sign In" 
      ONPress={()=>navigation.navigate('Sign_upScreen')}
      />

      <View style={styles.reg_view}>
      <Text style={styles.no_acc_txt}>If you have no account!  please</Text>
      <TouchableOpacity>
      <Text style={styles.reg_txt}>REGISTER</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Text style={styles.guest_txt}>Already have an account?</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.bg_clr
    
  },
  ml_text: {
    alignSelf: 'center',
    fontFamily: Fonts.R_Black,
    color: 'black',
    fontSize: 36,
    paddingTop: 78,
  },
  wlcm_txt: {
    alignSelf: 'center',
    paddingTop: 50,
    fontFamily: Fonts.R_Bold,
    color: 'red',
    fontSize: 22,
  },
  signIn_txt: {
    alignSelf: 'center',
    paddingTop: 3,
    paddingBottom: 35,
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
    marginLeft: 30,
    resizeMode: 'contain',
    tintColor: Color.primary,
  },
  check_view: {
    flexDirection: 'row',
    marginBottom:20,
    marginTop:15
  },
  rm_text: {
    color: Color.BLACK,
    paddingHorizontal: 5,
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
    marginTop: 10,
    fontFamily:Fonts.SF_Bold,
    fontWeight:'bold'
  },
  reg_txt:{
    color: Color.primary,
    textDecorationLine:'underline'
  },
  guest_txt:{
    color: Color.BLACK,
    alignSelf:'center',
    marginVertical:50,
    fontWeight:'bold',
    fontSize:16,
    letterSpacing:1,
    fontFamily:Fonts.SF_Bold
  }

});

export default Signup;
