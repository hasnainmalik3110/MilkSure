import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { camera_icon, imranKhan, msg_icon, profile_icon } from '../../themes/images';
import { Color } from '../../themes/colors';
import Custom_Input from '../../components/custom_input';
import Custom_btn from '../../components/custom_btn';

const EditProfile = () => {
    const [name, setname] = useState(''); 
    const [username,  setusername] = useState('');
    const [email, setemail] = useState('');


    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <View style={styles.profile_view}>
                    <Image source={imranKhan} style={styles.profile} />
                    <TouchableOpacity style={styles.camera_btn}>
                        <Image source={camera_icon} style={styles.camera} />
                    </TouchableOpacity>
                </View>
                <Custom_Input
                    value={name}
                    onChangeText={txt => {
                        setname(txt);
                    }}
                    placeholder="Name"
                    leftImage={profile_icon}
                    
                />

                <Custom_Input
                    value={username}
                    onChangeText={txt => {
                        setusername(txt);
                    }}
                    placeholder="username"
                    leftImage={profile_icon}
                    
                />

                <Custom_Input
                    value={email}
                    onChangeText={txt => {
                        setemail(txt);
                    }}
                    placeholder="Email"
                    leftImage={msg_icon}
                    
                />
                <View style={styles.btn_view}></View>
                <Custom_btn title="update" />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: Color.bg_clr,
    },
    profile_view: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 300,
    },
    profile: {
        width: '60%',
        height: '60%',
        borderRadius: 100,
        resizeMode: 'contain',
    },
    camera: {
        width: '80%',
        height: '80%',
        tintColor: Color.BLACK,
        resizeMode: 'contain',
    },
    camera_btn: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '20%',
        left: '19%',
        padding: '0.1%',
        borderColor: Color.primary,
        backgroundColor:Color.primary
    },
    btn_view: {
        marginTop: '20%',
        marginEnd: '10%',
    },
});

export default EditProfile;
