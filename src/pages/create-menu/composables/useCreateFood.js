import { ref } from "vue";
import { useRouter } from "vue-router";
import { createMenuApi, updateMenuApi } from "src/api/menus";

export const useCreateFood = () => {
  const router = useRouter();
  const dialogCreateMenuVisible = ref(false);
  const dialogCreateMenuNameVisible = ref(true);
  const dayWeekSelected = ref("");
  const nameMomentFoodSelected = ref("");
  const descriptionFoodSelected = ref("");

  const menuCreated = ref(false);
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

  const saveFood = async (descriptionFood) => {
    const dayWeek = dayWeekSelected.value.toLocaleLowerCase();
    const nameFood = nameMomentFoodSelected.value;

    daysWeekMenu.value[dayWeek][nameFood] = descriptionFood;

    try {
      await updateMenuApi(menuId.value, daysWeekMenu.value);
    } catch (error) {
      throw new Error(error.message);
    }
    closeDialog();
  };

  const showDialog = (dayWeek, nameMomentFood, descriptionFood) => {
    return () => {
      dayWeekSelected.value = dayWeek;
      nameMomentFoodSelected.value = nameMomentFood;
      descriptionFoodSelected.value = descriptionFood;
      dialogCreateMenuVisible.value = true;
    };
  };

  const closeDialog = () => {
    dialogCreateMenuVisible.value = false;
  };

  const backToHome = () => {
    router.push({ name: "Home" });
  };

  const createMenu = async (nameMenu) => {
    menuCreated.value = nameMenu;
    dialogCreateMenuNameVisible.value = false;
    try {
      const menuRef = await createMenuApi(
        nameMenu,
        JSON.stringify(daysWeekMenu.value),
        {
          currentMenu: true,
        }
      );
      menuId.value = menuRef.id;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    saveFood,
    backToHome,
    showDialog,
    closeDialog,
    createMenu,
    daysWeekMenu,
    dayWeekSelected,
    nameMomentFoodSelected,
    descriptionFoodSelected,
    dialogCreateMenuVisible,
    dialogCreateMenuNameVisible,
  };
};
