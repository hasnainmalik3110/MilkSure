import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../screens/Authentication/Login/style';
import { Color } from '../themes/colors';
const Custom_Input = ({ value, onChangeText, onFocus, onBlur, placeholder, leftImage, rightImage,ONRightPress, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [userEmail, setuserEmail] = useState('')

    const handleFocus = () => {
        setIsFocused(true);
        
    };

    const handleBlur = () => {
        setIsFocused(false);
        
    };

    return (
        <View style={[styles.email_input_view, isFocused && styles.focus_input,]}>
            {leftImage && <Image source={leftImage} style={[styles.left_icon, {tintColor: value ? Color.BLACK: Color.grey1}]} />}
            <TextInput
                style={styles.email_input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={'#9E9E9E'}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
            <TouchableOpacity 
            onPress={ONRightPress} >
            {rightImage && <Image source={rightImage} style={[styles.right_icon, {tintColor: value ? Color.BLACK: Color.grey1}]} />}
            </TouchableOpacity>
        </View>
    );
};

export default Custom_Input;
