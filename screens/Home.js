import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
    return (
    <ScrollView style={styles.container}>
        <View style={styles.Title}>
            <Text style={styles.TitleText}>Bienvenido</Text>
            <Text style={styles.TitleText}>a HelpEx</Text>
        </View>
        <View style={styles.textParrafo}>
            <Text style={styles.textParrafoText}>Es una aplicacion orienta al escaneo de las personas que padecen de alguna enfermedad. En el cual, las demas personas tendra los datos disponible para contartase con la persona agregada como contacto de emergencia.</Text>
        </View>
        <View style={styles.Imagen}>
            <Image
                style={styles.Image}
                source={require('../assets/help.jpg')}
            />
        </View>
        <View style={styles.textParrafo}>
            <Text style={styles.textParrafoText}>Para poder usar la aplicacion, es necesario que se registre en la opcion de "Login", para posteriormente registrar a la persona. Una vez registrado, podra escanear a la persona.</Text>
        </View>
        <View style={styles.Imagen}>
            <Image
                style={styles.Image}
                source={require('../assets/ayuda.jpg')}
            />
        </View>
        <StatusBar style="auto" />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Title: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TitleText: { 
        fontSize: 50,
        fontWeight: 'bold',
        color: '#98d5c9', //color titulo
    },
    textParrafo: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Imagen: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: { 
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    textParrafoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5b6f7f', //color texto
    },
});