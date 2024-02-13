import { ref } from "vue";

export const useBoardMenu = () => {
  const dialogCreateFoodVisible = ref(false);
  const dayWeekSelected = ref("");
  const nameMomentFoodSelected = ref("");
  const descriptionFoodSelected = ref("");

  const saveFood = () => {};

  const showDialog = (dayWeek, nameMomentFood, descriptionFood) => {
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
  };
};
