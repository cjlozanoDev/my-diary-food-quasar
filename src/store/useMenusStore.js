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
});
