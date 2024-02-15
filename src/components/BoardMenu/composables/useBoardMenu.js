import { ref } from "vue";

export const useBoardMenu = (emit) => {
  const dialogCreateFoodVisible = ref(false);
  const dayWeekSelected = ref("");
  const nameMomentFoodSelected = ref("");
  const descriptionFoodSelected = ref("");

  const foodNames = ref([
    "breakfast",
    "snackmorning",
    "lunch",
    "snackevening",
    "dinner",
  ]);

  const saveFood = (descriptionFood) => {
    emit(
      "save-food",
      descriptionFood,
      dayWeekSelected.value,
      nameMomentFoodSelected.value
    );
    closeDialog();
  };

  const showDialog = (dayWeek, nameMomentFood, descriptionFood) => () => {
    dayWeekSelected.value = dayWeek;
    nameMomentFoodSelected.value = nameMomentFood;
    descriptionFoodSelected.value = descriptionFood;
    dialogCreateFoodVisible.value = true;
  };
  const closeDialog = () => {
    dialogCreateFoodVisible.value = false;
  };

  return {
    showDialog,
    closeDialog,
    saveFood,
    dayWeekSelected,
    nameMomentFoodSelected,
    descriptionFoodSelected,
    dialogCreateFoodVisible,
    foodNames,
  };
};
