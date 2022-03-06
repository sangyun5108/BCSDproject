import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

const writeUserData = async (list, type) => {
  try {
    const docRef = await addDoc(
      collection(db, type === "income" ? "income" : "expediture"),
      {
        list,
      }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default writeUserData;
