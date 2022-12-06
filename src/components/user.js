import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function User({ id, rut, nombre, apellidoPaterno, apellidoMaterno, direccion, diagnostico, nombreContactoEmergencia, apellidoContactoEmergencia, rutContactoEmergencia, telefonoContactoEmergencia, parentescoContactoEmergencia }) {
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Feather
            name="edit"
            size={24}
            color="#5b6f7f"
            onPress={() => navigation.navigate("EditUser")}
          />
        ),
      });
    }, []);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Datos Usuario</Text>
          <Text style={styles.text}>Rut: {rut}</Text>
          <Text style={styles.text}>Nombre: {nombre}</Text>
          <Text style={styles.text}>Apellido Paterno: {apellidoPaterno}</Text>
          <Text style={styles.text}>Apellido Materno: {apellidoMaterno}</Text>
          <Text style={styles.text}>Direccion: {direccion}</Text>
          <Text style={styles.text}>Diagnostico: {diagnostico}</Text>
          <Text style={styles.text}>Nombre Contacto Emergencia: {nombreContactoEmergencia}</Text>
          <Text style={styles.text}>Apellido Contacto Emergencia: {apellidoContactoEmergencia}</Text>
          <Text style={styles.text}>Rut Contacto Emergencia: {rutContactoEmergencia}</Text>
          <Text style={styles.text}>Telefono Contacto Emergencia: {telefonoContactoEmergencia}</Text>
          <Text style={styles.text}>Parentesco Contacto Emergencia: {parentescoContactoEmergencia}</Text>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#5b6f7f',
      margin: 3,
    },
    titulo: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#98d5c9',
    },
  });

