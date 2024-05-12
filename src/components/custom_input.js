// Custom_Input.js
import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from '../themes/colors';
import { eye, hidden_eye } from '../themes/images';
import { styles } from '../screens/Authentication/Login/style';

const Custom_Input = ({ value, onChangeText, onFocus, onBlur, placeholder, leftImage, rightImage, secureTextEntry, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={[styles.email_input_view, isFocused && styles.focus_input]}>
            {leftImage && <Image source={leftImage} style={[styles.left_icon, { tintColor: value ? Color.BLACK : Color.grey1 }]} />}
            <TextInput
                style={styles.email_input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={'#9E9E9E'}
                secureTextEntry={secureTextEntry && !showPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
            {value.length > 0 && rightImage && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image source={showPassword ? hidden_eye : eye} style={[styles.right_icon, { tintColor: value ? Color.BLACK : Color.grey1 }]} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Custom_Input;
