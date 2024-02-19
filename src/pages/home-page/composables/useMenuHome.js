import { useMenusStore } from "src/store/useMenusStore";
import { computed } from "vue";
import { updateMenuApi } from "src/api/menus";

export const useMenuHome = () => {
  const menusStore = useMenusStore();

  const updateWeekMenu = async (descriptionFood, dayWeek, nameMomentFood) => {
    menusStore.setMenuWeek({
      id: currentMenu.value.id,
      descriptionFood,
      dayWeek,
      nameMomentFood,
    });

    try {
      await updateMenuApi(currentMenu.value.id, currentMenu.value.menu);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const currentMenu = computed(() => menusStore.currentMenu);

  return {
    updateWeekMenu,
    currentMenu,
  };
};
