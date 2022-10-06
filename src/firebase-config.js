// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNY1qCFpOJb88J4attQn9RXBRmtqHZNiQ",
  authDomain: "abschluss10b-69b14.firebaseapp.com",
  projectId: "abschluss10b-69b14",
  storageBucket: "abschluss10b-69b14.appspot.com",
  messagingSenderId: "1051859073068",
  appId: "1:1051859073068:web:f8c7c2f31376f8b7a07989",
  measurementId: "G-YK1JSWS7Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();