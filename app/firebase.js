// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACbmt2yxIyD05u83TXXzguD5q8d5XcTm4",
  authDomain: "nextauth-409611.firebaseapp.com",
  databaseURL: "https://nextauth-409611-default-rtdb.firebaseio.com",
  projectId: "nextauth-409611",
  storageBucket: "nextauth-409611.appspot.com",
  messagingSenderId: "168763935519",
  appId: "1:168763935519:web:c8d4b9ff1237f718df7e2a",
  measurementId: "G-N36EHXFEKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);