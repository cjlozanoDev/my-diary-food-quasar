import { getDocs, addDoc, db, collection, query, where } from "./firebase";

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

export { getMenusUserApi, getCurrenMenuApi, createMenuApi };
