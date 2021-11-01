import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpcLw5QCPnTvl-8geafTdd6iTYI-_YaDk",
    authDomain: "authproyecto-1e88e.firebaseapp.com",
    projectId: "authproyecto-1e88e",
    storageBucket: "authproyecto-1e88e.appspot.com",
    messagingSenderId: "906613689300",
    appId: "1:906613689300:web:fa2a5afdb9d3b7a4fce441"
  };
  

// Initialize Firebase
app.initializeApp(firebaseConfig);

//Creamos dos constante que exportamos como un objeto
const db = app.firestore()
const auth = app.auth()

export {db, auth}