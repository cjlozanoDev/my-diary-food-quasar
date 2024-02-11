import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, doc, db, setDoc } from "./firebase";
import { useUserStore } from "src/store/useUserStore";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useMenusStore } from "src/store/useMenusStore";
import { getMenusUserApi } from "./menus";

const onAuthStateChangedApi = () => {
  onAuthStateChanged(auth, (user) => {
    const userStore = useUserStore();

    if (user) {
      localStorage.setItem("signedin", "true");
      userStore.setUser(auth);
      getMenusUser();
    }
    if (!user) {
      localStorage.removeItem("signedin");
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
