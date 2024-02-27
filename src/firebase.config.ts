// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyArhczx5x1x9ba98dv-_4X_3yH8hObh90Q",
  authDomain: "aniver-pedro-banco.firebaseapp.com",
  projectId: "aniver-pedro-banco",
  storageBucket: "aniver-pedro-banco.appspot.com",
  messagingSenderId: "1064982205883",
  appId: "1:1064982205883:web:f81078c8a16847d2b0e09e",
  measurementId: "G-0RDVFE9DNC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);