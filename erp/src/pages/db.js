// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj74CMZ8gkXAKKNPaEQEsIBAf7P6iI-mw",
  authDomain: "omniforge-dade1.firebaseapp.com",
  projectId: "omniforge-dade1",
  storageBucket: "omniforge-dade1.appspot.com",
  messagingSenderId: "889758456309",
  appId: "1:889758456309:web:3d770d2f06d4e8528268bc",
  measurementId: "G-F9YH66HSYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db