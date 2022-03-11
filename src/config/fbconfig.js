// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Nota: Se podria exportar por separado los metodos a utilizar por firebase para disminuir el peso final de la app

// Your web app's Firebase configuration and initialization
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAQ7NzfUfo8KrZV6YaeyUCOFFKj1gs9AgY",
  authDomain: "fir-react-app-42a12.firebaseapp.com",
  projectId: "fir-react-app-42a12",
  storageBucket: "fir-react-app-42a12.appspot.com",
  messagingSenderId: "298964127378",
  appId: "1:298964127378:web:d7c1972cf0e06e222da04b",
});

//Firestore
const db = getFirestore();

//Auth
const auth = getAuth();

export { firebaseApp, db, auth };
