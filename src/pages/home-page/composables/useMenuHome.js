import { useMenusStore } from "src/store/useMenusStore";
import { computed } from "vue";
import { updateMenuApi } from "src/api/menus";
import { ref } from "vue";

export const useMenuHome = () => {
  const dialogUpdateMainDataMenuVisible = ref(false);
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

  const openDialogUpdateMainDataMenuVisible = () => {
    dialogUpdateMainDataMenuVisible.value = true;
  };

  const closeDialogUpdateMainDataMenuVisible = () => {
    dialogUpdateMainDataMenuVisible.value = false;
  };

  const currentMenu = computed(() => menusStore.currentMenu);

  return {
    updateWeekMenu,
    openDialogUpdateMainDataMenuVisible,
    closeDialogUpdateMainDataMenuVisible,
    currentMenu,
    dialogUpdateMainDataMenuVisible,
  };
};
