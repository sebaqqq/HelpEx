import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text, Alert  } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { database } from "../src/dataBase/database-firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

//``
const CreateUser = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({
        rut: "",
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        direccion: "",
        diagnostico: "",
        nombreContactoEmergencia: "",
        apellidoContactoEmergencia: "",
        rutContactoEmergencia: "",
        telefonoContactoEmergencia: "",
        parentescoContactoEmergencia: "",
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value}); 
    };

    const createNewUser = () => {
        addDoc(collection(database, "user"), state)
        .then(() => {
            Alert.alert("Usuario creado correctamente");
            navigation.goBack();
        }).catch((error) => {
            Alert.alert("Error al crear usuario");
        });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.titulo}>Crear Usuario</Text>
                <TextInput
                    placeholder="RUT (11.111.111-k)"
                    style={styles.correo}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChangeText("rut", value)}
                />
                
                <TextInput
                    placeholder="Nombre"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeText("nombre", value)}
                />
                <TextInput
                    placeholder="Apellido Paterno"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeText("apellidoPaterno", value)}
                />
                <TextInput
                    placeholder="Apellido Materno"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeText("apellidoMaterno", value)}
                />
                <TextInput
                    placeholder="Direccion"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeText("direccion", value)}
                />
                <TextInput
                    placeholder="Diagnostico"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeText("diagnostico", value)}
                />
                <TextInput
                    style={styles.correo}
                    placeholder="Nombre Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("nombreContactoEmergencia", value)}
                />
                <TextInput
                    style={styles.correo}
                    placeholder="Apellido Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("apellidoContactoEmergencia", value)}
                />
                <TextInput
                    style={styles.correo}
                    placeholder="Rut Contacto Emergencia (11.111.111-k)"
                    keyboardType="numeric"
                    onChangeText={(value) => handleChangeText("rutContactoEmergencia", value)}
                />
                <TextInput
                    placeholder="Telefono Contacto Emergencia"
                    style={styles.correo}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChangeText("telefonoContactoEmergencia", value)}
                />
                <TextInput
                    placeholder="Parentesco Contacto Emergencia"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeText("parentescoContactoEmergencia", value)}
                />
                <TouchableOpacity 
                    onPress={() => createNewUser()}
                    style={styles.boton}>
                        <Text style={styles.botonText}>Crear Usuario</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    inputGroup: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
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
    correo: {
        width: '100%',
        height: 50,
        borderColor: '#98d5c9',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        padding: 10,
        marginTop: 20,
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#98d5c9',
    },
});

export default CreateUser;