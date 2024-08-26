import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import {
  createMenuApi,
  updateMenuApi,
  updateMainDataMenuApi,
} from "src/api/menus";
import { useMenusStore } from "src/store/useMenusStore";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useI18n } from "vue-i18n";

export const useCreateFood = () => {
  const router = useRouter();

  const dialogUpdateMainDataMenuVisible = ref(false);
  const dialogCreateMenuNameVisible = ref(true);

  const menuCurrentMarked = ref(false);
  const menuCreated = ref(null);
  const menusStore = useMenusStore();
  const statePageStore = useStatePageStore();

  const { t } = useI18n();

  const nameMenu = ref("");
  const descriptionMenu = ref("");
  const menuId = ref(null);

  const daysWeekMenu = ref({
    monday: {
      completeName: "Monday",
      traductorName: "monday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
    tuesday: {
      completeName: "Tuesday",
      traductorName: "tuesday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
    wednesday: {
      completeName: "Wednesday",
      traductorName: "wednesday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
    thursday: {
      completeName: "Thursday",
      traductorName: "thursday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
    friday: {
      completeName: "Friday",
      traductorName: "friday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
    saturday: {
      completeName: "Saturday",
      traductorName: "saturday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
    sunday: {
      completeName: "Sunday",
      traductorName: "sunday",
      breakfast: "",
      snackmorning: "",
      lunch: "",
      snackevening: "",
      dinner: "",
    },
  });

  const saveFood = async (
    descriptionFood,
    dayWeekSelected,
    nameFoodSelected
  ) => {
    daysWeekMenu.value[dayWeekSelected][nameFoodSelected] = descriptionFood;
    menuCreated.value.menu = JSON.stringify(daysWeekMenu.value);

    try {
      await updateMenuApi(menuId.value, daysWeekMenu.value);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const backToHome = () => {
    router.push({ name: "Home" });
  };

  const createMenu = async (nameMenuForm, descriptionMenuForm) => {
    nameMenu.value = nameMenuForm;
    descriptionMenu.value = descriptionMenuForm;

    dialogCreateMenuNameVisible.value = false;
    try {
      const parsedMenu = JSON.stringify(daysWeekMenu.value);
      menuCreated.value = await createMenuApi(
        nameMenuForm,
        descriptionMenuForm,
        parsedMenu,
        {
          currentMenu: !menusStore.menus.length,
        }
      );
      menuId.value = menuCreated.value.id;
      menusStore.addMenu(menuCreated.value);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const markMenuToCurrent = () => {
    menusStore.markCurrentMenu(menuId.value);
    menuCurrentMarked.value = true;
  };

  const updateMainDataMenu = async (nameMenuForm, descriptionMenuForm) => {
    statePageStore.setLoading(true, t("loading"));
    closeDialogUpdateMainDataMenuVisible();
    try {
      await updateMainDataMenuApi(
        menuCreated.value.id,
        nameMenuForm,
        descriptionMenuForm
      );
      menusStore.setMainDataMenu({
        id: menuCreated.value.id,
        nameMenu,
        description: descriptionMenu,
      });
      nameMenu.value = nameMenuForm;
      descriptionMenu.value = descriptionMenuForm;
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

  const isCurrentMenu = computed(
    () => menusStore.menus.length === 1 || menuCurrentMarked.value
  );

  return {
    saveFood,
    backToHome,
    createMenu,
    markMenuToCurrent,
    updateMainDataMenu,
    openDialogUpdateMainDataMenuVisible,
    closeDialogUpdateMainDataMenuVisible,
    dialogUpdateMainDataMenuVisible,
    dialogCreateMenuNameVisible,
    menuCreated,
    isCurrentMenu,
    nameMenu,
    descriptionMenu,
  };
};
