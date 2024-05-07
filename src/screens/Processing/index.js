import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Processing = ({ route }) => {
    const { selectedImage } = route.params;

    return (
      <View style={styles.container}>
        <Text>Selected Image</Text>
        {selectedImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage.path }} style={styles.image} />
          </View>
        )}
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      marginVertical: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
  });
export default Processing;
