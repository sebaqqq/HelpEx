import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { database } from "../src/dataBase/database-firebase";
import {
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
  collection,
  query,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const EditUser = () => {
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

    const [user, setUser] = useState([]);
    React.useEffect(() => {
        const collectionRef = collection(database, "user");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setUser(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                }))
            );
        });
        return unsubscribe;
    }, []);
    let id = "";
    user.map((value) => {
        id = value.id
    });
    const handleChangeTexte = (name, value) => {
        setState({ ...state, [name]: value });
    };
    
    const onEdit = () => {
        const docRef = doc(database, "user", id);
        updateDoc(docRef, {
            //rut: state.rut,
            nombre: state.nombre,
            apellidoPaterno: state.apellidoPaterno,
            apellidoMaterno: state.apellidoMaterno,
            direccion: state.direccion,
            diagnostico: state.diagnostico,
            nombreContactoEmergencia: state.nombreContactoEmergencia,
            apellidoContactoEmergencia: state.apellidoContactoEmergencia,
            //rutContactoEmergencia: state.rutContactoEmergencia,
            telefonoContactoEmergencia: state.telefonoContactoEmergencia,
            parentescoContactoEmergencia: state.parentescoContactoEmergencia,
        });
        navigation.goBack();
    };
    const onDelete = () => {
        const docRef = doc(database, "user", id);
        deleteDoc(docRef);
        navigation.goBack('');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.titulo}>Editar Datos</Text>
                <TextInput
                    placeholder="Nombre"
                    style={styles.correo}
                    onChangeText={(value) => handleChangeTexte("nombre", value)}
                />
                <TextInput
                    placeholder="Apellido Paterno"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("apellidoPaterno", value)
                    }
                />
                <TextInput
                    placeholder="Apellido Materno"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("apellidoMaterno", value)
                    }
                />
                <TextInput
                    placeholder="Direccion"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("direccion", value)
                    }
                />
                <TextInput
                    placeholder="Diagnostico"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("diagnostico", value)
                    }
                />
                <TextInput
                    placeholder="Nombre Contacto Emergencia"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("nombreContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Apellido Contacto Emergencia"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("apellidoContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Telefono Contacto Emergencia"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("telefonoContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Parentesco Contacto Emergencia"
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("parentescoContactoEmergencia", value)
                    }
                />
                <TouchableOpacity
                    onPress={() => onEdit()}
                    style={styles.boton}
                >
                    <Text style={styles.botonText}>Editar Datos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onDelete()}
                    style={styles.boton}
                >
                    <Text style={styles.botonText}>Eliminar Datos</Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    correo: {
        height: 40,
        borderColor: "#cccccc",
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 10,
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
      titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#98d5c9',
    },
});

export default EditUser;