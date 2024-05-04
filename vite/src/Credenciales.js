// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAUsAt_XGv1tj6EFreemDFGrRbBCvop7Q",
  authDomain: "vite-web-1375c.firebaseapp.com",
  projectId: "vite-web-1375c",
  storageBucket: "vite-web-1375c.appspot.com",
  messagingSenderId: "562674560776",
  appId: "1:562674560776:web:8b4615110adaa57f6946bd",
  measurementId: "G-9MLWZM9RV8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;