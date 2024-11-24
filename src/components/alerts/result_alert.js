import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Color } from '../../themes/colors';
import {  adultrated, pure } from '../../themes/images';

const ResultAlert = ({ visible, result, onClose }) => {
  const getImage = () => {
    return result === 'Adulterated Milk' ? adultrated : pure; 
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
          <FastImage
            source={getImage()}
            style={styles.logo}
            resizeMode={FastImage.resizeMode.contain} 
          />
          <Text style={styles.resultTxt}>
            {result === 'Adulterated Milk' ? 'Milk is Adulterated!' : 'Milk is Pure!'}
          </Text>
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '5%',
    width: '90%',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  resultTxt: {
    fontSize: 22,
    color: Color.BLACK,
    lineHeight: 28,
    marginVertical: '4%',
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: Color.primary,
    paddingVertical: '6%',
    borderRadius: 10,
    alignItems: 'center',
  },
  okButtonText: {
    color: Color.BLACK,
    fontSize: 14,
    lineHeight: 18,
  },
});

export default ResultAlert;
