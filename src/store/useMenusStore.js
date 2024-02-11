import { defineStore } from "pinia";

export const useMenusStore = defineStore("menusStore", {
  state: () => ({
    menus: [],
  }),
  actions: {
    setMenus(menus) {
      this.menus = menus;
    },
  },
  getters: {
    currentMenu() {
      return !this.menus.length
        ? {}
        : this.menus.find((menu) => menu.currentMenu);
    },
  },
});
