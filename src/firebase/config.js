// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo1LdHiGcchjQaEXO5Xc1w0GZaRViQ2Gs",
  authDomain: "amazingtodoapp.firebaseapp.com",
  projectId: "amazingtodoapp",
  storageBucket: "amazingtodoapp.appspot.com",
  messagingSenderId: "288067633563",
  appId: "1:288067633563:web:dc177fc704460f9cb3613e",
  measurementId: "G-H16DZSMLZD"
};

// Initialize Firebase
 const appFirebase = initializeApp(firebaseConfig);

 export default appFirebase
