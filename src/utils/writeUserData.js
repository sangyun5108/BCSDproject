import { ref,push } from "firebase/database";
import { database } from "../firebase";

export const writeUserData = (list,type) => {
    const db = database;

    if(type === 'income'){
        push(ref(db,'/income'),list);
    }else{
        push(ref(db,'/expediture'),list);
    }
}