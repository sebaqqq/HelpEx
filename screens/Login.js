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
import { firebaseConfig } from "../src/dataBase/firebase";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

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
      Alert.alert("Cuenta creada");
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Error, Se ha producido un error al crear cuenta');
    });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //console.log(user);
      const user = userCredential.user;
      Alert.alert("Bienvenido");
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Correo o Contraseña incorrectos');
    });
  };

  return (  
      <View style={styles.container}>
      <Text style={styles.Title}>Bienvenido</Text>
      <Text style={styles.bajadaTitulo}>Iniciar Sesión con HelpEx</Text>
      <TextInput
        placeholder="helpex@email.com"
        keyboardType="email-address"
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
        <Text style={styles.botonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={handleCreateAccount}
      style={styles.boton}>
        <Text style={styles.botonText}>Crear Cuenta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Text style={styles.Parrafo}>¡Si no tienes una cuenta solo ingresa tu correo y una contraseña, luego presiona el botón crear cuenta y automáticamente esta se creará!</Text>
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
    width: '90%',
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
    width: '90%',
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
    width: '85%',
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
  Parrafo: {
    fontSize: 14,
    color: '#5b6f7f', //color texto
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
