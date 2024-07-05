// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import.meta.env.VITE_FIREBASE_API_KEY
//AIzaSyDZroy9L0BllQA1B1DGQI6FH6pCDmfUn3c
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZroy9L0BllQA1B1DGQI6FH6pCDmfUn3c",
    authDomain: "mern-estate-6898a.firebaseapp.com",
  projectId: "mern-estate-6898a",
  storageBucket: "mern-estate-6898a.appspot.com",
  messagingSenderId: "461767419782",
  appId: "1:461767419782:web:88796b23ca695b971e6e07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);