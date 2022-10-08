// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth'; 
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPZSee_vivCm4AwdSbAh9UUfheE4X1bEY",
  authDomain: "test-c8774.firebaseapp.com",
  projectId: "test-c8774",
  storageBucket: "test-c8774.appspot.com",
  messagingSenderId: "80226688122",
  appId: "1:80226688122:web:aa049e3979e5d76d67efc3",
  measurementId: "G-RLQMJ1M7V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();