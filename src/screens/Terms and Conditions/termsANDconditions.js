import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Color } from '../../themes/colors';

const TermsAndConditions = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.content}>
        1. Acceptance of Terms: By accessing or using the "HPLC and Hyperspectral Imaging based Milk Adulteration Detection and Classification using Deep Learning Techniques" mobile application ("the App"), you agree to abide by these terms and conditions. If you do not agree with any part of these terms, you may not use the App.{"\n\n"}
        2. Use of the App: The App is intended for informational and educational purposes only. You agree to use the App solely for lawful purposes and in accordance with all applicable laws and regulations.{"\n\n"}
        3. Accuracy of Information: While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained in the App.{"\n\n"}
        4. Intellectual Property: The App and its content, including but not limited to text, graphics, images, and software, are protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or republish any part of the App without our prior written consent.{"\n\n"}
        5. Data Collection and Privacy: By using the App, you consent to the collection and use of your personal information as described in our Privacy Policy. We may collect, store, and process your information for the purpose of improving the functionality and user experience of the App.{"\n\n"}
        6. Limitation of Liability: In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the App, whether based on contract, tort, strict liability, or otherwise, even if we have been advised of the possibility of such damages.{"\n\n"}
        7. Modifications to the App: We reserve the right to modify or discontinue, temporarily or permanently, the App or any part of it with or without notice. You agree that we shall not be liable to you or any third party for any modification, suspension, or discontinuance of the App.{"\n\n"}
        8. Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.{"\n\n"}
        9. Contact Us: If you have any questions or concerns about these terms and conditions, please contact us at [hasnainmalik2110@gmail.com].{"\n\n"}
        By using the App, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:Color.BLACK,
  },
  content: {
    fontSize: 16,
    color:Color.BLACK,
  },
});

export default TermsAndConditions;
