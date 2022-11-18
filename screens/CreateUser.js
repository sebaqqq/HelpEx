import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TextInput, Button } from "react-native";
import { database } from "../src/dataBase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


const CreateUser = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({
        rut: "",
        userId: "",
        imageFirebase: "",
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

    uploadImage = (uri) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onerror = reject;
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    resolve(xhr.response);
                }
            };

            xhr.open("GET", uri);
            xhr.responseType = "blob";
            xhr.send();
        })
    };

    openGallery = async () => {
        const resultPermission = await Permission.askAsync(Permission.CAMERA_ROLL);
        const { userId } = this.state;
        if (resultPermission) {
            const resultImagePicker = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3]
            });
        }

        if (resultImagePicker.cancelled == false) {
            const imageUri = resultImagePicker.uri;

            this.uploadImage(imageUri).then(resolve => {
                let ref = 
                firebase.storage().ref().child("images/" + userId + ".jpg");
                ref.put(resolve).then(resolve => {
                    //this.setState({ imageFirebase: imageUri });
                    console.log("Imagen Cargada");           
                });
            })
            .catch(error => {
                console.log(error);
            });
        }
    };

    checkImage = () => {
        const { imageFirebase } = this.state;

        if (imageFirebase) {
            return (
                <Image
                    source={{ uri: imageFirebase }}
                    style={{ width: 300, height: 300 }}
                />
            );
        }
        return null;
    };

    loadImage = async () => {
        //const { userId } = this.state; lo llame de esa manera
        //                               userID
        firebase.storage().ref("images/${this.state.userId}").getDownloadURL().then(resolve => {
            this.setState({ imageFirebase: resolve });
        }).catch(error => {
            console.log(error);
        });
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Rut"
                    onChangeText={(value) => handleChangeText("rut", value)}
                />
    
                <Button 
                onPress={() => this.openGallery()} 
                title="Seleccionar Imagen"
                color="#841584"
                />
                
                <Button 
                onPress={() => this.loadImage()} 
                title="Cargar Imagen"
                color="#841584"
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