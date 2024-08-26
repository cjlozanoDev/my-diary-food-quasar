import {
  getDocs,
  addDoc,
  updateDoc,
  db,
  doc,
  collection,
  runTransaction,
  query,
  where,
} from "./firebase";
import { useUserStore } from "src/store/useUserStore";

/* const userStoreLocalStorage = JSON.parse(localStorage.getItem("userStore"));
const userUid = userStoreLocalStorage ? userStoreLocalStorage.uid : ""; */

const getMenusUserApi = () => {
  const userStore = useUserStore();
  const q = query(
    collection(db, "menus"),
    where("creatorUid", "==", userStore.uid)
  );
  return getDocs(q);
};

const getCurrenMenuApi = () => {
  const userStore = useUserStore();
  const q = query(
    collection(db, "menus"),
    where("creatorUid", "==", userStore.uid),
    where("currentMenu", "==", true)
  );
  return getDocs(q);
};

const createMenuApi = async (
  nameMenu,
  descriptionMenu,
  menu,
  props = { currentMenu: false }
) => {
  const userStore = useUserStore();
  const menuToCreate = {
    creatorUid: userStore.uid,
    currentMenu: props.currentMenu,
    name: nameMenu,
    description: descriptionMenu,
    menu,
    created_at: Date.now(),
  };

  const docMenuRef = await addDoc(collection(db, "menus"), {
    ...menuToCreate,
  });

  menuToCreate.id = docMenuRef.id;
  return menuToCreate;
};

const updateMenuApi = (idMenu, menu) => {
  const docRef = doc(db, "menus", idMenu);
  return updateDoc(docRef, {
    menu: typeof menu === "string" ? menu : JSON.stringify(menu),
  });
};

const updateMainDataMenuApi = (idMenu, nameMenu, descriptionMenu) => {
  const docRef = doc(db, "menus", idMenu);
  return updateDoc(docRef, {
    name: nameMenu,
    description: descriptionMenu,
  });
};

const updateCurrentMenu = (idPreviousCurrentMenu, idNewCurrentMendu) => {
  const menuNewCurrentDocRef = doc(db, "menus", idNewCurrentMendu);
  const menuPreviousCurrentRef = doc(db, "menus", idPreviousCurrentMenu);

  return runTransaction(db, async (transaction) => {
    const menuDocSnapshot1 = await transaction.get(menuNewCurrentDocRef);
    if (!menuDocSnapshot1.exists()) {
      throw new Error("El primer documento de menú no existe!");
    }
    const menuDocSnapshot2 = await transaction.get(menuPreviousCurrentRef);
    if (!menuDocSnapshot2.exists()) {
      throw new Error("El segundo documento de menú no existe!");
    }
    transaction.update(menuNewCurrentDocRef, { currentMenu: true });
    transaction.update(menuPreviousCurrentRef, { currentMenu: false });
  });
};

export {
  getMenusUserApi,
  getCurrenMenuApi,
  createMenuApi,
  updateMenuApi,
  updateCurrentMenu,
  updateMainDataMenuApi,
};
