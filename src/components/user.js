import React from "react";
import { database } from "../dataBase/firebase";
import { 
    deleteDoc,
    doc,
    updateDoc,
    addDoc,
    collection,
    query,
} from "firebase/firestore";
import { ListItem } from "react-native-elements";

export default function User({id, rut, image, nombre, apellidoPaterno, apellidoMaterno, direccion, diagnostico, nombreContactoEmergencia, apellidoContactoEmergencia, rutContactoEmergencia, telefonoContactoEmergencia, parentescoContactoEmergencia}) {
    return (
        <ListItem>
            <ListItem.Chevron />
            <ListItem.Content>
                <ListItem.Title>Rut: {rut}</ListItem.Title>
                <ListItem.Title>Imagen: {image}</ListItem.Title>
                <ListItem.Title>Nombre: {nombre}</ListItem.Title>
                <ListItem.Title>Apellido Paterno: {apellidoPaterno}</ListItem.Title>
                <ListItem.Title>Apellido Materno: {apellidoMaterno}</ListItem.Title>
                <ListItem.Title>Direccion: {direccion}</ListItem.Title>
                <ListItem.Title>Diagnostico: {diagnostico}</ListItem.Title>
                <ListItem.Title>Nombre Contacto Emergencia: {nombreContactoEmergencia}</ListItem.Title>
                <ListItem.Title>Apellido Contacto Emergencia: {apellidoContactoEmergencia}</ListItem.Title>
                <ListItem.Title>Rut Contacto Emergencia: {rutContactoEmergencia}</ListItem.Title>
                <ListItem.Title>Telefono Contacto Emergencia: {telefonoContactoEmergencia}</ListItem.Title>
                <ListItem.Title>Parentesco Contacto Emergencia: {parentescoContactoEmergencia}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    );
}