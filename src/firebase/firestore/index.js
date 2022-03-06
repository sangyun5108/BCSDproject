import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCML1nFiyb3nXdndChKZNrlf2eU-rdIa5U",
  authDomain: "moneydiary-bef4e.firebaseapp.com",
  projectId: "moneydiary-bef4e",
});

export const db = getFirestore();
