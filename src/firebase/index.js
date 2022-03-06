import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCML1nFiyb3nXdndChKZNrlf2eU-rdIa5U",
  authDomain: "moneydiary-bef4e.firebaseapp.com",
  projectId: "moneydiary-bef4e",
  storageBucket: "moneydiary-bef4e.appspot.com",
  messagingSenderId: "698360298941",
  appId: "1:698360298941:web:0dfe0588b9ef0c6a0ee6d4",
  measurementId: "G-BH9WTWK00W",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
