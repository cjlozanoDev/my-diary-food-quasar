import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";

const createUserWithEmailAndPasswordApi = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export { createUserWithEmailAndPasswordApi };
