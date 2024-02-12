// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbYMYawts1bmZKuZ2Om4KaxS6AxBype1g",
  authDomain: "photofolio-a3001.firebaseapp.com",
  projectId: "photofolio-a3001",
  storageBucket: "photofolio-a3001.appspot.com",
  messagingSenderId: "716446931138",
  appId: "1:716446931138:web:c75342be326f864ac2035b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
