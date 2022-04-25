// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5BOxTatssxCqDjdwCcrDq9UYuCnB_zIE",
  authDomain: "opd-collage.firebaseapp.com",
  projectId: "opd-collage",
  storageBucket: "opd-collage.appspot.com",
  messagingSenderId: "417186647530",
  appId: "1:417186647530:web:27b24f253769038ae17693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Access Firebase Authication
export const auth =  getAuth(app)
// Access Firebase Cloude Database
export const db = getFirestore(app)
// Access Firebase Cloude Storage
export const st = getStorage(app)