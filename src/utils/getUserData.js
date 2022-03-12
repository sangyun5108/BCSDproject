import { db } from "../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const getUserData = async () => {
  let data = [];

  try {
    const querySnapshot = await getDocs(collection(db, "income"));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
  } catch (e) {
    console.log(e);
  }

  return data;
};

export default getUserData;
