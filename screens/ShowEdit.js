import * as React from "react";
import { useState } from "react";
import {
    Button,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
    StyleSheet
} from "react-native";

import { database } from "../src/dataBase/database-firebase";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, query, addDoc, doc } from "firebase/firestore";
//src -> screens -> ShowEdit.js
import User from "../src/components/user";

function ShowEdit() {
    const navigation = useNavigation();
    const [user, setUser] = useState([]);
    React.useEffect(() => {
        const collectionRef = collection(database, "user");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setUser(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    rut : doc.data().rut,
                    nombre : doc.data().nombre,
                    apellidoPaterno : doc.data().apellidoPaterno,
                    apellidoMaterno : doc.data().apellidoMaterno,
                    direccion : doc.data().direccion,
                    diagnostico : doc.data().diagnostico,
                    nombreContactoEmergencia : doc.data().nombreContactoEmergencia,
                    apellidoContactoEmergencia : doc.data().apellidoContactoEmergencia,
                    rutContactoEmergencia : doc.data().rutContactoEmergencia,
                    telefonoContactoEmergencia : doc.data().telefonoContactoEmergencia,
                    parentescoContactoEmergencia : doc.data().parentescoContactoEmergencia,
                }))
            );
        });
        return unsubscribe;
    }, []);

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                {!user ? (
                    <Text>No hay datos</Text>
                ) : (
                    <View style={{ margin: 20, }}>
                        {user.map((user) => (
                            <User key={user.id} {... user} />
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        padding: 5,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10,
    },
});

export default ShowEdit;