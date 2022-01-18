import {collection,addDoc} from "firebase/firestore";
import { database } from "../firebase";

export const writeUserData = async(list,type) => {
    const db = database;

    try {
        const docRef = await addDoc(collection(db,type==="income"?"income":"expediture"),list);
        console.log("Document written with ID: ", docRef.id);
    } catch(e){
        console.error("Error adding document: ", e);
    }
}