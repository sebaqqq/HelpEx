import * as React from "react";
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//QR
import QRCode from "react-qr-code";

const CodeQR = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.codeQr}>
                <Text style={styles.titulo}>Código QR</Text>
                <QRCode
                fgColor="#5b6f7f"
                value="https://cripster21.github.io/"
                size={256} 
                level='L' />
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1",
        padding: 1,
    },
    codeQr: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
        paddingTop: 100,
    },
    codigoqr: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#98d5c9",
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#98d5c9',
        margin: 3,
        padding: 15,
    },
    parrafo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#5b6f7f',
        margin: 3,
        padding: 15,
    },
});

export default CodeQR;