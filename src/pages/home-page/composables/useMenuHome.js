import { useMenusStore } from "src/store/useMenusStore";
import { computed } from "vue";
import { updateMenuApi, updateMainDataMenuApi } from "src/api/menus";
import { useStatePageStore } from "src/store/useStatePageStore";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export const useMenuHome = () => {
  const dialogUpdateMainDataMenuVisible = ref(false);
  const menusStore = useMenusStore();
  const statePageStore = useStatePageStore();
  const { t } = useI18n();

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

  const updateMainDataMenu = async (nameMenu, descriptionMenu) => {
    statePageStore.setLoading(true, t("loading"));
    closeDialogUpdateMainDataMenuVisible();
    try {
      await updateMainDataMenuApi(
        currentMenu.value.id,
        nameMenu,
        descriptionMenu
      );
      menusStore.setMainDataMenu({
        id: currentMenu.value.id,
        nameMenu,
        description: descriptionMenu,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      statePageStore.setLoading(false);
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
    updateMainDataMenu,
    currentMenu,
    dialogUpdateMainDataMenuVisible,
  };
};
