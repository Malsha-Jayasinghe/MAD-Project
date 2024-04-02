// MainScreen.js

import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>

      

      <Text style={styles.text}>Student Portal of FHSS</Text>
      <Text style={styles.text}>Faculty of Humanities and Social Sciences </Text>
      <Text style={styles.text}>USJP</Text>

      <Image source={require('./assets/university_logo.png')} style={styles.logo} />
      <Text style={styles.text1}>WELCOME!</Text>

      <Button
        title="Press Me" onPress={handlePress}
        color="#800000" // Customize button color
        width="20"
        radius="100"
        style={styles.button} />

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    borderRadius: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center', // Aligns children components (Text) vertically
  },
  text1: {
    
    fontSize: 30,
    //fontFamily: 'TimesNewRoman',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,

  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,

  },


  logo: {

    width: 120, // Specify the width of your logo
    height: 120, // Specify the height of your logo
    resizeMode: 'contain', // This ensures your logo scales nicely
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
});

export default MainScreen;