import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyADB2MSV-MK_yvRHOVE0ee7x3kVzE6bwtQ",
    authDomain: "moneydiary-8b5fd.firebaseapp.com",
    projectId: "moneydiary-8b5fd",
    storageBucket: "moneydiary-8b5fd.appspot.com",
    messagingSenderId: "277630567776",
    appId: "1:277630567776:web:c000e306e33b98f9524a05",
    measurementId: "G-JMVLQ6SY9D"
};
  
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

