import { collection,getDocs } from 'firebase/firestore';
import { database } from '../firebase';

export const getUserData = async() => {
    const db = database;
    const snapShot = await getDocs(collection(db,"income"));
    const data = [];
    snapShot.forEach((doc)=>{
      
      const object = doc.data();
      object.id = doc.id;
      data.push(object);
    });

    return data;
}