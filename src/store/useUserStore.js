import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "",
    uid: "",
    email: "",
    emailVerified: false,
  }),
  actions: {
    setUser(user) {
      this.name = "";
      this.email = user.currentUser.email;
      this.uid = user.currentUser.uid;
      this.emailVerified = user.currentUser.emailVerified;
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
