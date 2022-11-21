import * as React from "react";
import { Text, View, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
//import { shareAsync } from 'expo-sharing';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Photo() {
  const navigation = useNavigation();
  let cameraRef = useRef();
  const [hasCamaraPermission, setHasCamaraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCamaraPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');  
    })();
  }, []);


  if (hasCamaraPermission === undefined) {
    return <Text>Necesita Permisos ...</Text>
  } else if (!hasCamaraPermission) {
    return <Text>No hay permisos para usar la camara</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      Sharing.isAvailableAsync(photo.uri).then(() => {
        setPhoto(undefined);
      })
      // shareAsync(photo.uri).then(() => {
      //   setPhoto(undefined);
      // });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: "data:image/jpg;base64"+ photo.base64 }} style={styles.preview} />
        {/* <TouchableOpacity 
          onPress={sharePic}
          style={styles.boton}>
          <Text style={styles.botonText}>Compartir</Text>
        </TouchableOpacity> */}
        {hasMediaLibraryPermission ?
        <TouchableOpacity 
          onPress={() => savePhoto}
          style={styles.boton}>
          <Text style={styles.botonText}>Guardar</Text>
        </TouchableOpacity>
        : undefined }
        <TouchableOpacity 
            onPress={() => savePhoto(undefined)}
            style={styles.boton}>
            <Text style={styles.botonText}>Descartar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        {/* <Button title="Tomar Foto" onPress={takePic} style={{alignItems: 'center'}} /> */}
        <TouchableOpacity 
            onPress={takePic}
            style={styles.boton}>
            <Text style={styles.botonText}>Tomar Foto</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
  },
  preview: {
    alignSelf: 'stretch',
    height: 300,
    width: 300,
  },
    // flex: 1,
    // width: 20,
    // height: 20,
  
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

export default Photo;
