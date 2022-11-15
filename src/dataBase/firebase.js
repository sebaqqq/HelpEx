// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsulhG3d9VEf6HFQ3ektR-NOclLV0j7eQ",
  authDomain: "helpex-367418.firebaseapp.com",
  projectId: "helpex-367418",
  storageBucket: "helpex-367418.appspot.com",
  messagingSenderId: "76652786593",
  appId: "1:76652786593:web:7362f504b10dc2cf7451e0",
  measurementId: "G-Q7E42R89KF"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getFirestore();