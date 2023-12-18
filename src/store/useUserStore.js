import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "",
    uid: "",
  }),
  actions: {
    setUser(user) {
      this.name = "";
      this.uid = user.currentUser.uid;
    },
    removeUser() {
      this.name = "";
      this.uid = "";
    },
  },
  persist: {
    paths: ["uid"],
  },
});
