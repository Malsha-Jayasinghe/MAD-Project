import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/university_logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>FHSS</Text>
      </View>

      <Text style={styles.title}>Home</Text>
      <View style={styles.options}>
        <Text style={styles.option}>My Courses</Text>
        <Text style={styles.option}>Exam Date and Result</Text>
        <Text style={styles.option}>Current GPA</Text>
        <Text style={styles.option}>Timeline</Text>
      </View>

      <View style={styles.navigationBar}>
        <Ionicons name="home-outline" size={24} color="white" />
        <Ionicons name="notifications-outline" size={24} color="white" />
        <Ionicons name="ellipsis-horizontal" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom:20,
  },
  logo: {
    width: 50, // Adjust the size as needed
    height: 50,
    marginRight: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  options: {
    alignItems: 'center',
    marginBottom: 20,
  },
  option: {
    fontSize: 18,
    marginBottom: 10,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#800000',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
  },
});

export default HomeScreen;
