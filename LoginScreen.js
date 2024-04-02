// LoginScreen.js

import React from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Perform login logic
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/university_logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>FHSS</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}> LOGIN HERE </Text>
        <TextInput style={styles.input} placeholder="User Name :" />
        <TextInput style={styles.input} placeholder="Password :" secureTextEntry />
        <Button title="Login" onPress={handleLogin}
          color="#A00303"
        />
        <Text style={styles.text1}> Don't have an account ? </Text>
        <Text style={styles.texta}> Register now </Text>

        <Text style={styles.text2}>Edit Your Profile </Text>
      </View >
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>@KDMPJ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 80, // Adjust the height as needed
    backgroundColor: '#800000',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 50, // Round bottom left corner
    borderBottomRightRadius: 50, // Round bottom right corner
    overflow: 'hidden', // Ensure content inside does not overflow rounded corners
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    
  },
  headerText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    backgroundColor: '#800000',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  footerText: {
    color: 'white',
  },
  text: {
    color: '#800000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,


  },
  texta: {
    color: '#A00303',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,


  },
  text1: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,

  },
  text2: {
    color: '#E38B07',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 75,


  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#800000',
    marginBottom: 20,
    padding: 10,
    borderRadius: 25,
    marginBottom: 30,
   
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center', // Aligns children components (Text) vertically
  },
});

export default LoginScreen;