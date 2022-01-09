// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYia2dziNVWPDZQQJwh1olMf-gHFKR7dw",
  authDomain: "dotconsole-1291e.firebaseapp.com",
  projectId: "dotconsole-1291e",
  storageBucket: "dotconsole-1291e.appspot.com",
  messagingSenderId: "371160634836",
  appId: "1:371160634836:web:d8eb820c7d3d37a60e3241",
  measurementId: "G-VM32VCW0HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


initializeApp(firebaseConfig);

const firestoreApp = getFirestore();


export const articleCollection = collection(firestoreApp, 'articles')