import {
  getDocs,
  addDoc,
  updateDoc,
  db,
  doc,
  collection,
  query,
  where,
} from "./firebase";

const userStoreLocalStorage = JSON.parse(localStorage.getItem("userStore"));
const userUid = userStoreLocalStorage.uid;

const getMenusUserApi = () => {
  const q = query(collection(db, "menus"), where("creatorUid", "==", userUid));
  return getDocs(q);
};

const getCurrenMenuApi = () => {
  const q = query(
    collection(db, "menus"),
    where("creatorUid", "==", userUid),
    where("currentMenu", "==", true)
  );
  return getDocs(q);
};

const createMenuApi = (nameMenu, menu, props = { currentMenu: false }) => {
  return addDoc(collection(db, "menus"), {
    creatorUid: userUid,
    currentMenu: props.currentMenu,
    name: nameMenu,
    menu,
    created_at: Date.now(),
  });
};
const updateMenuApi = (idMenu, menu) => {
  const docRef = doc(db, "menus", idMenu);
  return updateDoc(docRef, {
    menu: JSON.stringify(menu),
  });
};

export { getMenusUserApi, getCurrenMenuApi, createMenuApi, updateMenuApi };
