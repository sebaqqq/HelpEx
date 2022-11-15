import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TextInput, Button } from "react-native";
import { database } from "../src/dataBase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Rut"
                    onChangeText={(value) => handleChangeText("rut", value)}
                />
                <TextInput
                    placeholder="Imagen"
                    onChangeText={(value) => handleChangeText("image", value)}
                />
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
                <Button title="Crear Usuario" onPress={() => createNewUser()} />
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
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
});

export default CreateUser;