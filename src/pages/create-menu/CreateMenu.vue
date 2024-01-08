<script setup>
import { ref } from "vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogCreateFood from "./components/DialogCreateFood.vue";

const dialogVisible = ref(false);
const dayWeekSelected = ref("");
const nameMomentFoodSelected = ref("");

const showDialog = (dayWeek, nameMomentFood) => {
  return () => {
    dayWeekSelected.value = dayWeek;
    nameMomentFoodSelected.value = nameMomentFood;
    dialogVisible.value = true;
  };
};
const closeDialog = () => {
  dialogVisible.value = false;
};
const daysWeekMenu = {
  monday: {
    completeName: "Monday",
    traductorName: "monday",
    breakfast: "Esto sería un desayuno rico",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
  tuesday: {
    completeName: "Tuesday",
    traductorName: "tuesday",
    breakfast: "",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
  wednesday: {
    completeName: "Wednesday",
    traductorName: "wednesday",
    breakfast: "",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
  thursday: {
    completeName: "Thursday",
    traductorName: "thursday",
    breakfast: "",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
  friday: {
    completeName: "Friday",
    traductorName: "friday",
    breakfast: "",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
  saturday: {
    completeName: "Saturday",
    traductorName: "saturday",
    breakfast: "",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
  sunday: {
    completeName: "Sunday",
    traductorName: "sunday",
    breakfast: "",
    snackMorning: "",
    lunch: "",
    snackEvening: "",
    dinner: "",
  },
};
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{ $t("create_menu") }}</span>
    <main class="page-my-diary-food">
      <section
        class="create-menu__card"
        v-for="dayWeek in Object.keys(daysWeekMenu)"
        :key="dayWeek"
      >
        <span class="create-menu__card-title">{{ dayWeek.toUpperCase() }}</span>
        <p class="create-menu__card__text-day">
          <span>Breakfast</span>
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color=""
            :onclick="
              showDialog(daysWeekMenu[dayWeek].completeName, 'Breakfast')
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
              showDialog(daysWeekMenu[dayWeek].completeName, 'SnackMorning')
            "
          />
        </p>
        <p class="create-menu__card__text-food">
          {{ daysWeekMenu[dayWeek].snackMorning }}
        </p>

        <p class="create-menu__card__text-day">
          <span>Lunch</span>
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color=""
            :onclick="showDialog(daysWeekMenu[dayWeek].completeName, 'Lunch')"
          />
        </p>
        <p class="create-menu__card__text-food">
          {{ daysWeekMenu[dayWeek].lunch }}
        </p>

        <p class="create-menu__card__text-day">
          <span>SnackEvening</span>
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color=""
            :onclick="
              showDialog(daysWeekMenu[dayWeek].completeName, 'SnackEvening')
            "
          />
        </p>
        <p class="create-menu__card__text-food">
          {{ daysWeekMenu[dayWeek].snackEvening }}
        </p>

        <p class="create-menu__card__text-day">
          <span>Dinner</span>
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color=""
            :onclick="showDialog(dayWeek.completeName, 'Dinner')"
          />
        </p>
        <p class="create-menu__card__text-food">
          {{ daysWeekMenu[dayWeek].dinner }}
        </p>
      </section>

      <section>
        <DialogCreateFood
          v-model="dialogVisible"
          :day-week="dayWeekSelected"
          :name-moment-food="nameMomentFoodSelected"
          @saveFood="closeDialog"
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
