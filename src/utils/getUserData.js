import { db } from "../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const getUserData = async () => {
  const querySnapshot = await getDocs(collection(db, "income"));
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export default getUserData;
