<script setup>
import { ref } from "vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogCreateFood from "./components/DialogCreateFood.vue";
import DialogCreateMenuName from "./components/DialogCreateMenuName.vue";

const dialogCreateMenuVisible = ref(false);
const dialogCreateMenuNameVisible = ref(true);
const dayWeekSelected = ref("");
const nameMomentFoodSelected = ref("");
const completeNameMomentFoodSelected = ref("");
const descriptionFoodSelected = ref("");

const menuCreated = ref(false);

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

const showDialog = (
  dayWeek,
  nameMomentFood,
  completeNameMomentFood,
  descriptionFood
) => {
  return () => {
    dayWeekSelected.value = dayWeek;
    nameMomentFoodSelected.value = nameMomentFood;
    completeNameMomentFoodSelected.value = completeNameMomentFood;
    descriptionFoodSelected.value = descriptionFood;
    dialogCreateMenuVisible.value = true;
  };
};

const saveFood = (descriptionFood) => {
  const dayWeek = dayWeekSelected.value.toLocaleLowerCase();
  const nameFood = nameMomentFoodSelected.value;

  daysWeekMenu.value[dayWeek][nameFood] = descriptionFood;
  closeDialog();
};

const closeDialog = () => {
  dialogCreateMenuVisible.value = false;
};
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{ $t("create_menu") }}</span>
    <main class="page-my-diary-food">
      <div v-if="!dialogCreateMenuNameVisible">
        <section
          class="create-menu__card"
          v-for="dayWeek in Object.keys(daysWeekMenu)"
          :key="dayWeek"
        >
          <span class="create-menu__card-title">{{
            dayWeek.toUpperCase()
          }}</span>
          <p class="create-menu__card__text-day">
            <span>Breakfast</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].completeName,
                  'breakfast',
                  'Breakfast',
                  daysWeekMenu[dayWeek]['breakfast']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].breakfast }}
          </p>

          <p class="create-menu__card__text-day">
            <span>Snack Morning</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].completeName,
                  'snackmorning',
                  'Snack Morning',
                  daysWeekMenu[dayWeek]['snackmorning']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].snackmorning }}
          </p>

          <p class="create-menu__card__text-day">
            <span>Lunch</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].completeName,
                  'lunch',
                  'Lunch',
                  daysWeekMenu[dayWeek]['lunch']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].lunch }}
          </p>

          <p class="create-menu__card__text-day">
            <span>Snack Evening</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].completeName,
                  'snackevening',
                  'Snack Evening',
                  daysWeekMenu[dayWeek]['snackevening']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].snackevening }}
          </p>

          <p class="create-menu__card__text-day">
            <span>Dinner</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  dayWeek.completeName,
                  'dinner',
                  'Dinner',
                  daysWeekMenu[dayWeek]['dinner']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].dinner }}
          </p>
        </section>
      </div>

      <section v-if="dialogCreateMenuNameVisible">
        <DialogCreateMenuName :dialog-visible="dialogCreateMenuNameVisible" />
      </section>

      <section>
        <DialogCreateFood
          v-model="dialogCreateMenuVisible"
          :day-week="dayWeekSelected"
          :name-moment-food="completeNameMomentFoodSelected"
          :description-food-prop="descriptionFoodSelected"
          @saveFood="saveFood"
          @close-dialog="closeDialog"
        />
      </section>
    </main>
  </div>
</template>

<style scoped>
.create-menu__card {
  position: relative;
  width: 100%;
  min-height: 300px;
  max-width: 1200px;
  margin-bottom: var(--spacing-lg);
  background: white;
  border-radius: 20px;
  border: 25px solid var(--brown-ligth);
  box-shadow: 0 0 0 2px black;
  padding: 5px;
  background: var(--gray-ligth);
}
.create-menu__card-title {
  position: absolute;
  top: -46px;
  margin: 0;
  min-width: 100px;
  text-align: center;
  padding: 8px;
  background: white;
  border-radius: 10px;
  border: 2px solid black; /* Grosor y color del borde del título */
}
.create-menu__card__text-day {
  background: var(--q-accent);
  border-radius: 19px;
  padding: 5px;
  color: white;
}
.create-menu__card__button-edit {
  padding: 5px;
  background-color: var(--brown);
}
.create-menu__card__text-food {
  line-height: 25px;
  min-height: 45px;
}

@media (min-width: 798px) {
  .create-menu__card {
    font-size: var(--font-medium-large);
    margin-bottom: var(--spacing-xl);
  }
  .create-menu__card-title {
    top: -57px;
  }
  .create-menu__card__text-food {
    line-height: 45px;
  }
}
</style>
