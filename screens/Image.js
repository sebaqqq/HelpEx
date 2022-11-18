{/*
import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

//DataBase
import firebaseConfig from "../src/dataBase/firebase";
import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

//Image Picker
import { Permission, ImagePicker } from "expo";

export default class Image extends React.Component {
    constructor(){
        super();

        this,state = {
            userId: "",
            imageFirebase: ""
        };
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

    render() {
        return (
            <View style={styles.container}>
                {this.checkImage()}
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
            </View>
        );
    }
}

*/}
