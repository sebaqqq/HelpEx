import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
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
                    rut: doc.data().rut,
                    nombre: doc.data().nombre,
                    apellidoPaterno: doc.data().apellidoPaterno,
                    apellidoMaterno: doc.data().apellidoMaterno,
                    direccion: doc.data().direccion,
                    diagnostico: doc.data().diagnostico,
                    nombreContactoEmergencia: doc.data().nombreContactoEmergencia,
                    apellidoContactoEmergencia: doc.data().apellidoContactoEmergencia,
                    rutContactoEmergencia: doc.data().rutContactoEmergencia,
                    telefonoContactoEmergencia: doc.data().telefonoContactoEmergencia,
                    parentescoContactoEmergencia: doc.data().parentescoContactoEmergencia,
                }))
            );
        });
        return unsubscribe;
    }, []);

    let id = "";
    user.map((value) => {
        id = value.id;
    });
    const handleChangeTexte = (name, value) => {
        setState({ ...state, [name]: value });
    };
    
    const rellenarCampos = (user) => {
        user.map((value) => {
            setState({
                rut: value.rut,
                nombre: value.nombre,
                apellidoPaterno: value.apellidoPaterno,
                apellidoMaterno: value.apellidoMaterno,
                direccion: value.direccion,
                diagnostico: value.diagnostico,
                nombreContactoEmergencia: value.nombreContactoEmergencia,
                apellidoContactoEmergencia: value.apellidoContactoEmergencia,
                rutContactoEmergencia: value.rutContactoEmergencia,
                telefonoContactoEmergencia: value.telefonoContactoEmergencia,
                parentescoContactoEmergencia: value.parentescoContactoEmergencia,
            });
            return value;
        });
    };

    const onEdit = () => {
        const docRef = doc(database, "user", id);
        updateDoc(docRef, {
            rut: state.rut,
            nombre: state.nombre,
            apellidoPaterno: state.apellidoPaterno,
            apellidoMaterno: state.apellidoMaterno,
            direccion: state.direccion,
            diagnostico: state.diagnostico,
            nombreContactoEmergencia: state.nombreContactoEmergencia,
            apellidoContactoEmergencia: state.apellidoContactoEmergencia,
            rutContactoEmergencia: state.rutContactoEmergencia,
            telefonoContactoEmergencia: state.telefonoContactoEmergencia,
            parentescoContactoEmergencia: state.parentescoContactoEmergencia,
        });
        Alert.alert("Datos actualizados");
        navigation.goBack();
    };
    const onDelete = () => {
        const docRef = doc(database, "user", id);
        deleteDoc(docRef);
        Alert.alert("Usuario eliminado correctamente");
        navigation.goBack('');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.titulo}>Editar Datos</Text>
                <TouchableOpacity
                    onPress={() => rellenarCampos(user)}
                    style={styles.botonVisualizar}
                >
                    <Text style={styles.botonText}>Visualizar Datos a Editar</Text>
                </TouchableOpacity>
                <TextInput 
                    placeholder="Rut"
                    style={styles.correo}
                    keyboardType="numeric"
                    value={state.rut}
                    onChangeText={(value) => handleChangeTexte("rut", value)}
                />
                <TextInput
                    placeholder="Nombre"
                    value={state.nombre}
                    style={styles.correo}
                    onChangeText={(value) => handleChangeTexte("nombre", value)}
                />
                <TextInput
                    placeholder="Apellido Paterno"
                    style={styles.correo}
                    value={state.apellidoPaterno}
                    onChangeText={(value) =>
                        handleChangeTexte("apellidoPaterno", value)
                    }
                />
                <TextInput
                    placeholder="Apellido Materno"
                    style={styles.correo}
                    value={state.apellidoMaterno}
                    onChangeText={(value) =>
                        handleChangeTexte("apellidoMaterno", value)
                    }
                />
                <TextInput
                    placeholder="Direccion"
                    style={styles.correo}
                    value={state.direccion}
                    onChangeText={(value) =>
                        handleChangeTexte("direccion", value)
                    }
                />
                <TextInput
                    placeholder="Diagnostico"
                    value={state.diagnostico}
                    style={styles.correo}
                    onChangeText={(value) =>
                        handleChangeTexte("diagnostico", value)
                    }
                />
                <TextInput
                    placeholder="Nombre Contacto Emergencia"
                    style={styles.correo}
                    value={state.nombreContactoEmergencia}
                    onChangeText={(value) =>
                        handleChangeTexte("nombreContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Apellido Contacto Emergencia"
                    style={styles.correo}
                    value={state.apellidoContactoEmergencia}
                    onChangeText={(value) =>
                        handleChangeTexte("apellidoContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Rut Contacto Emergencia"
                    style={styles.correo}
                    value={state.rutContactoEmergencia}
                    keyboardType="numeric"
                    onChangeText={(value) =>
                        handleChangeTexte("rutContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Telefono Contacto Emergencia"
                    style={styles.correo}
                    keyboardType="numeric"
                    value={state.telefonoContactoEmergencia}
                    onChangeText={(value) =>
                        handleChangeTexte("telefonoContactoEmergencia", value)
                    }
                />
                <TextInput
                    placeholder="Parentesco Contacto Emergencia"
                    style={styles.correo}
                    value={state.parentescoContactoEmergencia}
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
        padding: 10,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    correo: {
        height: 50,
        width: '100%',
        borderColor: "#cccccc",
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 20,
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
    botonVisualizar: {
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
        marginBottom: 20,
        backgroundColor: '#98d5c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default EditUser;