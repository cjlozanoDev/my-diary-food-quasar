import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

import { auth, doc, db, setDoc } from "./firebase";
import { useUserStore } from "src/store/useUserStore";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useMenusStore } from "src/store/useMenusStore";
import { getMenusUserApi } from "./menus";

const onAuthStateChangedApi = (router) => {
  onAuthStateChanged(auth, (user) => {
    const userStore = useUserStore();

    if (user) {
      userStore.setUser(auth);
      localStorage.setItem("signedin", "true");
      if (!user.emailVerified) {
        router.push({
          name: "EmailNoVerified",
        });
      } else {
        localStorage.setItem("emailVerified", "true");
        getMenusUser();
      }
    }
    if (!user) {
      localStorage.removeItem("signedin");
      localStorage.removeItem("emailVerified");
      userStore.removeUser();
    }
  });
};

const getMenusUser = async () => {
  const statePageStore = useStatePageStore();
  const menusStore = useMenusStore();

  try {
    const querySnapshot = await getMenusUserApi();

    if (querySnapshot.size > 0) {
      const menusArray = querySnapshot.docs.map((doc) =>
        Object.assign(doc.data(), { id: doc.id })
      );
      menusStore.setMenus(menusArray);
    }
  } catch (error) {
    throw new Error(error.message);
  } finally {
    statePageStore.setLoadingMenus(false);
  }
};

const createUserWithEmailAndPasswordApi = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const sendPasswordResetEmailApi = (email) => {
  return sendPasswordResetEmail(auth, email);
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

const sendEmailVerificationApi = () => {
  return sendEmailVerification(auth.currentUser);
};

const logoutApi = () => signOut(auth);

export {
  onAuthStateChangedApi,
  createUserWithEmailAndPasswordApi,
  sendPasswordResetEmailApi,
  addUserCollectionApi,
  signInWithEmailAndPasswordApi,
  sendEmailVerificationApi,
  logoutApi,
  auth,
};
