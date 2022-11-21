import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../src/dataBase/firebase";

function HomeScreen() {
  const navigation = useNavigation();
  const App = initializeApp(firebaseConfig);
  const auth = getAuth(App);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Cuenta");
      })
      .catch((error) => alert(error.message));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.Title}>¿Tienes tu usuario creado para Escanear?</Text>
      <Text style={styles.textParrafo}>Si no tienes uno crea el usuario presionando el boton "Crear Usuario".</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateUser")}
        style={styles.boton}
      >
        <Text style={styles.botonText}>Crear Usuario</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShowEdit")}
        style={styles.boton}
      >
        <Text style={styles.botonText}>Mostrar Datos</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("EditUser")}
        style={styles.boton}
      >
        <Text style={styles.botonText}>Editar Datos</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.boton}
      >
        <Text style={styles.botonText}>Salir de Cuenta</Text>
      </TouchableOpacity>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  Title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#98d5c9',
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
  textParrafo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5b6f7f',
  },
});

export default HomeScreen;
