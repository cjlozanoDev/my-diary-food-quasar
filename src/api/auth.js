import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, doc, db, setDoc } from "./firebase";
import { useUserStore } from "src/store/useUserStore";

const onAuthStateChangedApi = () => {
  onAuthStateChanged(auth, (user) => {
    const userStore = useUserStore();

    if (user) {
      localStorage.setItem("signedin", "true");
      userStore.setUser(auth);
    }
    if (!user) {
      localStorage.removeItem("signedin");
      userStore.removeUser();
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

const logoutApi = () => signOut(auth);

export {
  onAuthStateChangedApi,
  createUserWithEmailAndPasswordApi,
  addUserCollectionApi,
  signInWithEmailAndPasswordApi,
  logoutApi,
};
