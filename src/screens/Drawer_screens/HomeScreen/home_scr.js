import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../../themes/colors';
import { Fonts } from '../../../themes/fonts';
import { upload_img } from '../../../themes/images'; // Your upload image asset
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import Custom_btn from '../../../components/custom_btn';
import ResultAlert from '../../../components/alerts/result_alert';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Home_scr = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [fileUri, setFileUri] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [rowIndex, setRowIndex] = useState('');
  const [milkResult, setMilkResult] = useState(null); // To store the result ('Adulterated' or 'Pure')

  const openFile = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('Selected document:', file);
      const uri = file[0].uri;
      const name = file[0].name;
      const destPath = `${RNFS.TemporaryDirectoryPath}/${name}`;

      // Copy the selected file to the temp directory
      await RNFS.copyFile(uri, destPath);
      console.log('Temporary file path:', destPath);

      setFileUri(destPath);
      setFileName(name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the document picker');
      } else {
        console.log('Error picking document:', err);
      }
    }
  };

  const uploadAndPredict = async () => {
    if (!fileUri || rowIndex === '') {
      Alert.alert('Error', 'Please upload a CSV file and provide a row index.');
      return;
    }

    try {
      const response = await RNFetchBlob.fetch(
        'POST',
        'http://192.168.182.30:5000/upload', // Replace with your local Flask server IP
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          { name: 'file', filename: fileName, type: 'text/csv', data: RNFetchBlob.wrap(fileUri) },
          { name: 'row_index', data: rowIndex }, // Send row index as a form field
        ]
      );

      const result = await response.json();

      if (result.error) {
        Alert.alert('Error', result.error);
      } else {
        setMilkResult(result.result); // Set the result ('Adulterated' or 'Pure')
        setAlertVisible(true);
        console.log(result); // Show the alert
      }
    } catch (err) {
      console.log('Error uploading file:', err);
      Alert.alert('Error', 'Something went wrong while uploading the file.');
    }
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.milk_txt}>
        MILK {'\n'}
        ADULTERATION {'\n'}
        DETECTION
      </Text>
      <Image source={upload_img} style={styles.upload_img} />
      <Text style={styles.csv_txt}>Upload CSV File</Text>

      <Custom_btn title="Upload" ONPress={openFile} />

      <ResultAlert
        visible={alertVisible}
        result={milkResult} 
        onClose={hideAlert}
      />
</ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter row index"
          placeholderTextColor={Color.grey1}
          keyboardType="numeric"
          value={rowIndex}
          onChangeText={setRowIndex}
        />
        <TouchableOpacity style={styles.icon_btn} onPress={uploadAndPredict}>
          <AntDesign name="arrowright" size={28} color="white" />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg_clr,
    padding: '5%',
    paddingVertical:'20%'
  },
  milk_txt: {
    fontSize: 30,
    color: Color.primary,
    lineHeight: 32,
    marginVertical: '3%',
    letterSpacing: 0.3,
    textAlign: 'center',
    fontFamily: Fonts.R_Bold,
  },
  upload_img: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '15%',
    marginBottom: '8%',
  },
  csv_txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '5%',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  inputContainer: {
    position:'absolute',
    bottom:0,
    left:'5%',
    right:'5%',
    
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: 10,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: Color.BLACK,
  },
  icon_btn: {
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home_scr;
