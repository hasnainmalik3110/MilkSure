import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Color } from '../../themes/colors';
import Custom_btn from '../../components/custom_btn';
import Header from '../../components/header';
import { Back } from '../../themes/images';

const Processing = ({ route,navigation }) => {
    const { selectedImage } = route.params;

    return (
      <View style={styles.app_cont}>
      <Header
    title="Home"
    source={Back}
    ONPRESS={()=>navigation.goBack()}
    />
      <View style={styles.container}>
      
        {selectedImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage.path }} style={styles.image} />
          </View>
        )}
        <View style={styles.btn_view}>
        <View>
        <Custom_btn title='selected'
        WIDTH={130}
        ONPress={() => navigation.navigate('ResultScreen')}
        
        />
        </View>
        <View>
        <Custom_btn title='repost'
        ONPress={() => navigation.goBack()}
        WIDTH={130}
        />
        </View>
        </View>
      </View>
      </View>
    );
};
const styles = StyleSheet.create({
  app_cont:{
    flex:1
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:Color.bg_clr
    },
    imageContainer: {
      marginVertical: 20,
      marginHorizontal:20,      
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      borderRadius:10
    },
    btn_view:{
      flexDirection:"row",
      width:"70%",
      justifyContent:"space-between"
      
    }
    
  });
export default Processing;
