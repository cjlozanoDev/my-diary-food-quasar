import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, doc, db, setDoc } from "./firebase";

const createUserWithEmailAndPasswordApi = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const addUserCollectionApi = async ({ email, uid }) => {
  return setDoc(doc(db, "users", uid), {
    name: "",
    email,
    uid,
  });
};
export { createUserWithEmailAndPasswordApi, addUserCollectionApi };
