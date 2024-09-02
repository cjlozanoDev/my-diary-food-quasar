import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "",
    uid: "",
    email: "",
  }),
  actions: {
    setUser(user) {
      this.name = "";
      this.email = user.currentUser.email;
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
