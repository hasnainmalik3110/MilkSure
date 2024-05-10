import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Color } from '../../../themes/colors';
import {
  drawer_icon,
  home_icon,
  profile_edit,
  profile_img,
} from '../../../themes/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fonts } from '../../../themes/fonts';

const CustomDrawerContent = ({ props, navigation }) => {
  const [btnstate, setbtnstate] = useState(0);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawer_cont}>
          <TouchableOpacity
            style={styles.drawer_icon_btn}
            onPress={() => navigation.closeDrawer()}>
            <Image source={drawer_icon} style={styles.drawer_icon_} />
          </TouchableOpacity>

          <View style={styles.profile_pic_view}>
            <Image source={profile_img} style={styles.profile_pic} />
            <TouchableOpacity>
              <Image source={profile_edit} style={styles.profile_edit_icon} />
            </TouchableOpacity>
            <View>
              <Text style={styles.name}>IMRAN KHAN</Text>
              <Text style={styles.email}>{'@'}imrankhan804</Text>
            </View>
          </View>
        </View>
        <View style={styles.item_view}>
          <DrawerItem
            style={[btnstate === 0 ? styles.active_btn : styles.inactive_btn]}
            label="Home"
            labelStyle={[
              styles.label,
              btnstate === 0 ? styles.labelActive : styles.labelInactive,
            ]}
            onPress={() => {
              navigation.navigate('Home');
              setbtnstate(0);
            }}
            icon={({ focused, color, size }) => (
              <Image
                source={home_icon}
                style={
                  btnstate === 0 ? styles.active_icon_ : styles.inactive_icon_
                }
              />
            )}
          />

          <DrawerItem
            style={[btnstate === 1 ? styles.active_btn : styles.inactive_btn]}
            label="Terms and Conditions"
            labelStyle={[
              styles.label,
              btnstate === 1 ? styles.labelActive : styles.labelInactive,
            ]}
            onPress={() => {
              navigation.navigate('TermsAndConditionsScreen');
              setbtnstate(1);
            }}
            icon={({ focused, color, size }) => (
              <Image
                source={home_icon}
                style={
                  btnstate === 1 ? styles.active_icon_ : styles.inactive_icon_
                }
              />
            )}
          />


          <DrawerItem
          style={[btnstate === 3 ? styles.active_btn : styles.inactive_btn]}
          label="Contacts"
          labelStyle={[
            styles.label,
            btnstate === 3 ? styles.labelActive : styles.labelInactive,
          ]}
          onPress={() => {
            navigation.navigate('ContactScreen');
            setbtnstate(3);
          }}
          icon={() => (
            <Image
              source={home_icon}
              style={
                btnstate === 3 ? styles.active_icon_ : styles.inactive_icon_
              }
            />
          )}
        />


        <DrawerItem
            style={[btnstate === 4 ? styles.active_btn : styles.inactive_btn]}
            label="Edit Profile"
            labelStyle={[
              styles.label,
              btnstate === 4 ? styles.labelActive : styles.labelInactive,
            ]}
            onPress={() => {
              navigation.navigate('ProfileScreen');
              setbtnstate(4);
            }}
            icon={({ focused, color, size }) => (
              <Image
                source={home_icon}
                style={
                  btnstate === 4 ? styles.active_icon_ : styles.inactive_icon_
                }
              />
            )}
          />


        </View>
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg_clr,
  },
  drawer_cont: {
    backgroundColor: Color.primary,
  },
  active_btn: {
    backgroundColor: Color.primary,
  },
  inactive_btn: {
    backgroundColor: Color.bg_clr,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelActive: {
    color: Color.WHITE,
    
  },
  labelInactive: {
    color: Color.primary,
    textDecorationLine: 'underline',
  },
  active_icon_: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Color.WHITE,
  },
  inactive_icon_: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Color.primary,
  },
  drawer_icon_btn: {
    top: '100%',
    left: '8%',
  },
  profile_pic: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  profile_pic_view: {
    borderRadius: 100,
    marginTop: 80,
    marginLeft: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  profile_edit_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    top: '230%',
    right: '100%',
  },
  name: {
    fontFamily: Fonts.SF_Bold,
    fontWeight: 'bold',
    color: Color.WHITE,
    letterSpacing: 0.5,
    fontSize: 18,
    top: '10%',
    right: '10%',
    padding: 5,
  },
  email: {
    fontFamily: Fonts.SF_Bold,

    color: Color.WHITE,
    letterSpacing: 0.5,
    fontSize: 15,
    top: '10%',
    right: '10%',
    padding: 3,
    textDecorationLine: 'underline',
  },
  name_view: {
    flexDirection: 'column',
  },
  item_view: {
    marginVertical: '10%',
  },
});
export default CustomDrawerContent;
