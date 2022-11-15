import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HelpEx</Text>
      <TouchableOpacity style={styles.buttonEscanear} onPress={() => {} }>
        <Image source={require('../assets/imgCara.jpg')} style={styles.buttonEscanerImage} />
        <Text style={styles.buttonTextEscaner}>Escanear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonAgregar} onPress={() => navigation.navigate() }>
        <Image source={require('../assets/addUser.jpg')} style={styles.buttonAgregarImage} />
        <Text style={styles.buttonTextAgregar}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#143157',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEscanear: {
    backgroundColor: '#white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEscanerImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextEscaner: {
    color: '#143157',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAgregar: {
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextAgregar: {
    color: '#143157',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAgregarImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desarrolladoresTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desarrolladores: {
    fontSize: 7,
    color: '#143157',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
