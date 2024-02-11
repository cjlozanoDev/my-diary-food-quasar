import { defineStore } from "pinia";

export const useMenusStore = defineStore("menusStore", {
  state: () => ({
    menus: [],
  }),
  actions: {
    setMenus(menus) {
      this.menus = menus;
    },
    addMenu(menu) {
      this.menus.push(menu);
    },
    markCurrentMenu(idMenu) {
      const previousCurrentMenu = this.menus.find((menu) => menu.currentMenu);
      previousCurrentMenu.currentMenu = false;

      const newCurrentMenu = this.menus.find((menu) => menu.id === idMenu);
      newCurrentMenu.currentMenu = true;
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
