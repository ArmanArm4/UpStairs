// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGx33fGqZhlVztSRuWmYIyxF9bFVoK0DE",
  authDomain: "online-shop-upstairs.firebaseapp.com",
  databaseURL: "https://online-shop-upstairs-default-rtdb.firebaseio.com",
  projectId: "online-shop-upstairs",
  storageBucket: "online-shop-upstairs.appspot.com",
  messagingSenderId: "931936663776",
  appId: "1:931936663776:web:1001aa70cb5d5c9c57b885",
  measurementId: "G-SSQ54WG3MT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
