import { defineStore } from "pinia";
import { updateCurrentMenu } from "src/api/menus";

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
    async markCurrentMenu(idMenu) {
      const previousCurrentMenu = this.currentMenu;
      previousCurrentMenu.currentMenu = false;

      const newCurrentMenu = this.menus.find((menu) => menu.id === idMenu);
      newCurrentMenu.currentMenu = true;

      try {
        await updateCurrentMenu(previousCurrentMenu.id, newCurrentMenu.id);
      } catch (e) {
        throw new Error(e.message);
      }
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
