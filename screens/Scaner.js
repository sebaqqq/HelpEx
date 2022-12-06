import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
//import React, { useState, useEffect } from 'react';
import { useEffect, useState } from "react";
//import { Link } from '@react-navigation/native';
//import { async } from '@firebase/util';

export default function Scaner() {
    const [hasPermission, setHasPermission] = useState([]);
    const [scanned, setScanned] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync([]);
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Código de barras con tipo ${type} y data ${Linking.openURL(`${data}`)} ha sido escaneado!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner 
                onBarCodeScanned={ scanned ? undefined : handleBarCodeScanned}
                // style={StyleSheet.absoluteFillObject}
                style={styles.escaner}
            />
            {/* {scanned && <Button title='Tap to Scan Again' onPress={() => setScanned(false)} />} */}
            {scanned && <TouchableOpacity
                onPress={() => setScanned(false)}
                style={styles.boton}>
                <Text style={styles.botonText}>Presione para Escanear</Text>
            </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    escaner: {  
        height: 500,
        width: 450,
        alignSelf: 'center',
    },
    boton: {
        width: '100%',
        height: 50,
        borderColor: '#98d5c9',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 40,
        paddingRight: 40,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#98d5c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});