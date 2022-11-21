import * as React from "react";
import { 
  Text, 
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
//Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
//import { firebaseConfigData } from "../src/dataBase/firebase";
import { firebaseConfig } from "../src/dataBase/firebase";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";


import HomeLogin from "./HomeLogin";

function LoginScreen() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(user);
      const user = userCredential.user;
      Alert.alert("Usuario creado");
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Error, Se ha producido un error al crear el usuario');
    });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(user);
      const user = userCredential.user;
      Alert.alert("Usuario logeado ");
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Uusuario o contraseña incorrectos');
    });
  };

  return (  
   
      <View style={styles.container}>
      <Text style={styles.Title}>Bienvenido</Text>
      <Text style={styles.bajadaTitulo}>Iniciar Sesion con HelpEx</Text>
      <TextInput
        placeholder="helpex@email.com"
        style={styles.correo}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        password={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.contraseña}
      />
      <TouchableOpacity 
      onPress={handleLogin}
      style={styles.boton}>
        <Text style={styles.botonText}>Iniciar Sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={handleCreateAccount}
      style={styles.boton}>
        <Text style={styles.botonText}>Crear Cuenta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#98d5c9', //color titulo
  },
  bajadaTitulo: {
    fontSize: 20,
    color: '#5b6f7f', //color texto
    fontWeight: 'bold',
  },
  correo: {
    width: '80%',
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
  contraseña: {
    width: '80%',
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
  boton: {
    width: '60%',
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
  },
  botonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botonRegitrarse: {
    borderColor: '#98d5c9',
  },
  botonTextRegistrarse: {
    fontSize: 15,
    color: '#5b6f7f',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  cuentaNo: {
    fontSize: 15,
    color: '#5b6f7f',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
