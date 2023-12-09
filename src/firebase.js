// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "api-firebase-6c098.firebaseapp.com",
  projectId: "api-firebase-6c098",
  storageBucket: "api-firebase-6c098.appspot.com",
  messagingSenderId: "349242441225",
  appId: "1:349242441225:web:c00e73d53094475f9342d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);