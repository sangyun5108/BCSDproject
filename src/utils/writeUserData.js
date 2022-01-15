import { ref,set } from "firebase/database";
import { database } from "../firebase";

export const writeUserData = (list,type) => {
    const db = database;


    if(type === 'income'){
        set(ref(db,'/income'),{
            list
        });
    }else{
        set(ref(db,'/expediture'),{
            list
        });
    }
}