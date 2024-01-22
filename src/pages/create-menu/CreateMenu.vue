<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createMenuApi, updateMenuApi } from "src/api/menus";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogCreateFood from "./components/DialogCreateFood.vue";
import DialogCreateMenuName from "./components/DialogCreateMenuName.vue";

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

const showDialog = (dayWeek, nameMomentFood, descriptionFood) => {
  return () => {
    dayWeekSelected.value = dayWeek;
    nameMomentFoodSelected.value = nameMomentFood;
    descriptionFoodSelected.value = descriptionFood;
    dialogCreateMenuVisible.value = true;
  };
};

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
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{ $t("create_menu") }}</span>
    <main class="page-my-diary-food">
      <div
        class="page-my-diary-food__container__menu"
        v-if="!dialogCreateMenuNameVisible"
      >
        <section
          class="create-menu__card"
          v-for="dayWeek in Object.keys(daysWeekMenu)"
          :key="dayWeek"
        >
          <span class="create-menu__card-title">{{
            $t(`${dayWeek}`).toUpperCase()
          }}</span>
          <p class="create-menu__card__text-day">
            <span>{{ $t("breakfast") }}</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].traductorName,
                  'breakfast',
                  daysWeekMenu[dayWeek]['breakfast']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].breakfast }}
          </p>

          <p class="create-menu__card__text-day">
            <span>{{ $t("snackmorning") }}</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].traductorName,
                  'snackmorning',
                  daysWeekMenu[dayWeek]['snackmorning']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].snackmorning }}
          </p>

          <p class="create-menu__card__text-day">
            <span>{{ $t("lunch") }}</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].traductorName,
                  'lunch',
                  daysWeekMenu[dayWeek]['lunch']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].lunch }}
          </p>

          <p class="create-menu__card__text-day">
            <span>{{ $t("snackevening") }}</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  daysWeekMenu[dayWeek].traductorName,
                  'snackevening',
                  daysWeekMenu[dayWeek]['snackevening']
                )
              "
            />
          </p>
          <p class="create-menu__card__text-food">
            {{ daysWeekMenu[dayWeek].snackevening }}
          </p>

          <p class="create-menu__card__text-day">
            <span>{{ $t("dinner") }}</span>
            <DiaryButton
              icon="edit"
              size="xs"
              class="create-menu__card__button-edit"
              color=""
              :onclick="
                showDialog(
                  dayWeek.completeName,
                  'dinner',
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

      <section v-else>
        <DialogCreateMenuName
          :dialog-visible="dialogCreateMenuNameVisible"
          @create-menu="createMenu"
          @close-dialog="backToHome"
        />
      </section>

      <section>
        <DialogCreateFood
          v-model="dialogCreateMenuVisible"
          :day-week="dayWeekSelected"
          :name-moment-food="nameMomentFoodSelected"
          :description-food-prop="descriptionFoodSelected"
          @saveFood="saveFood"
          @close-dialog="closeDialog"
        />
      </section>
    </main>
  </div>
</template>

<style scoped>
.page-my-diary-food__container__menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
