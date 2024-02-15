import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { createMenuApi, updateMenuApi } from "src/api/menus";
import { useMenusStore } from "src/store/useMenusStore";

export const useCreateFood = () => {
  const router = useRouter();

  const dialogCreateMenuNameVisible = ref(true);

  const menuCurrentMarked = ref(false);
  const menuCreated = ref(null);
  const menusStore = useMenusStore();

  const nameMenu = ref("");
  const menuId = ref(null);

  const daysWeekMenu = ref({
    monday: {
      completeName: "Monday",
      traductorName: "monday",
      breakfast: "Esto sería un desayuno rico",
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

  const createMenu = async (nameMenuForm) => {
    nameMenu.value = nameMenuForm;
    dialogCreateMenuNameVisible.value = false;
    try {
      const parsedMenu = JSON.stringify(daysWeekMenu.value);
      menuCreated.value = await createMenuApi(nameMenuForm, parsedMenu, {
        currentMenu: !menusStore.menus.length,
      });
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

  const isCurrentMenu = computed(
    () => menusStore.menus.length === 1 || menuCurrentMarked.value
  );

  return {
    saveFood,
    backToHome,
    createMenu,
    markMenuToCurrent,
    dialogCreateMenuNameVisible,
    menuCreated,
    isCurrentMenu,
    nameMenu,
  };
};
