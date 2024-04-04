// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdZmtZy6o0bXpV76LnSSjMSd5Rw0C8ntQ",
  authDomain: "ducflix-de763.firebaseapp.com",
  projectId: "ducflix-de763",
  storageBucket: "ducflix-de763.appspot.com",
  messagingSenderId: "909825439256",
  appId: "1:909825439256:web:b5260c2a26892e7eff756d",
  measurementId: "G-6DE09938Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()