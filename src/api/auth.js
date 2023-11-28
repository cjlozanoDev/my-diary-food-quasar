import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, doc, db, setDoc } from "./firebase";

const onAuthStateChangedApi = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("signedin", "true");
    }
    if (!user) {
      localStorage.removeItem("signedin");
    }
  });
};

const createUserWithEmailAndPasswordApi = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const addUserCollectionApi = async (username, { email, uid }) => {
  return setDoc(doc(db, "users", uid), {
    name: username,
    email,
    uid,
  });
};

const signInWithEmailAndPasswordApi = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logoutApi = () => {
  signOut(auth);
};

export {
  onAuthStateChangedApi,
  createUserWithEmailAndPasswordApi,
  addUserCollectionApi,
  signInWithEmailAndPasswordApi,
  logoutApi,
};
