import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TextInput, Button } from "react-native";
import { database } from "../src/dataBase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateUser = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({
        rut: "",
        image: "",
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
        navigation.goBack();
    };

    const [image, setImage] = useState('');

    const selectImage = () => {
        const options = {
            title: 'Seleccionar Imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        launchImageLibrary(options, response => {
            if (response.errorCode) {
                console.log('Image picker error: ', response.errorCode);
            } else if (response.didCancel) {
                console.log('User cancelled image picker');
            } else {
                const path = response.assets[0].uri;
                setImage(path);
            }
        }) 
    };

    const takePicture = () => {
        const options = {
            title: 'Tomar una Imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            includeBase64: true,
        }

        launchCamera(options, response => {
            if (response.errorCode) {
                console.log('Image picker error: ', response.errorCode);
            } else if (response.didCancel) {
                console.log('User cancelled image picker');
            } else {
                const uri = response.assets[0].uri;
                setImage(uri);
            }
        });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Rut"
                    onChangeText={(value) => handleChangeText("rut", value)}
                />
                {/* touchable opacity 
                <Button title="Seleccionar Imagen" style={styles.Button} onPress={() => selectImage() } />
                <Button title="Tomar Fotografia" style={styles.Button} onPress={() => takePicture() } />
                */}
                <TextInput
                    placeholder="Nombre"
                    onChangeText={(value) => handleChangeText("nombre", value)}
                />
                <TextInput
                    placeholder="Apellido Paterno"
                    onChangeText={(value) => handleChangeText("apellidoPaterno", value)}
                />
                <TextInput
                    placeholder="Apellido Materno"
                    onChangeText={(value) => handleChangeText("apellidoMaterno", value)}
                />
                <TextInput
                    placeholder="Direccion"
                    onChangeText={(value) => handleChangeText("direccion", value)}
                />
                <TextInput
                    placeholder="Diagnostico"
                    onChangeText={(value) => handleChangeText("diagnostico", value)}
                />
                <TextInput
                    placeholder="Nombre Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("nombreContactoEmergencia", value)}
                />
                <TextInput
                    placeholder="Apellido Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("apellidoContactoEmergencia", value)}
                />
                <TextInput
                    placeholder="Rut Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("rutContactoEmergencia", value)}
                />
                <TextInput
                    placeholder="Telefono Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("telefonoContactoEmergencia", value)}
                />
                <TextInput
                    placeholder="Parentesco Contacto Emergencia"
                    onChangeText={(value) => handleChangeText("parentescoContactoEmergencia", value)}
                />
                <Button title="Crear Usuario" style={styles.Button} onPress={() => createNewUser()} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
    },
    Button: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        marginBottom: 10,
    },
});

export default CreateUser;