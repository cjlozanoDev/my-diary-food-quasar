import { defineStore } from "pinia";
import { updateCurrentMenu } from "src/api/menus";

export const useMenusStore = defineStore("menusStore", {
  state: () => ({
    menus: [],
    idMenuSelected: 0,
  }),
  actions: {
    setMenus(menus) {
      this.menus = menus;
    },
    addMenu(menu) {
      this.menus.push(menu);
    },
    setMenuCompleted(dataMenu) {
      const menuToUpdated = this.menus.find((menu) => menu.id === dataMenu.id);
      menuToUpdated = dataMenu;
    },
    setMenuWeek(propsMenu = { id, descriptionFood, dayWeek, nameMomentFood }) {
      const menuToUpdated = this.menus.find((menu) => menu.id === propsMenu.id);
      const menuToUpdatedMenuJSON = { ...JSON.parse(menuToUpdated.menu) };

      menuToUpdatedMenuJSON[propsMenu.dayWeek][propsMenu.nameMomentFood] =
        propsMenu.descriptionFood;

      menuToUpdated.menu = JSON.stringify(menuToUpdatedMenuJSON);
    },
    setMainDataMenu(propsMenu = { id, nameMenu, description }) {
      const menuToUpdated = this.menus.find((menu) => menu.id === propsMenu.id);
      menuToUpdated.name = propsMenu.nameMenu;
      menuToUpdated.description = propsMenu.description;
    },
    setIdMenuSelected(idMenu) {
      this.idMenuSelected = idMenu;
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
    menuSelected() {
      return !this.idMenuSelected
        ? {}
        : this.menus.find((menu) => menu.id === this.idMenuSelected);
    },
  },
  persist: {
    paths: ["idMenuSelected"],
  },
});
