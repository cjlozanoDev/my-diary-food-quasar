import { getDocs, db, collection, query, where } from "./firebase";

const getMenusUserApi = () => {
  const userStoreLocalStorage = JSON.parse(localStorage.getItem("userStore"));
  const userUid = userStoreLocalStorage.uid;

  const q = query(collection(db, "menus"), where("creatorUid", "==", userUid));
  return getDocs(q);
};

export { getMenusUserApi };
