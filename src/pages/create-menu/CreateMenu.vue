<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogCreateFood from "./components/DialogCreateFood.vue";
import DialogCreateMenuName from "./components/DialogCreateMenuName.vue";
import { useCreateFood } from "./composables/useCreateFood";

const {
  backToHome,
  closeDialog,
  createMenu,
  saveFood,
  showDialog,
  daysWeekMenu,
  dayWeekSelected,
  descriptionFoodSelected,
  dialogCreateMenuNameVisible,
  dialogCreateMenuVisible,
  nameMomentFoodSelected,
} = useCreateFood();
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{ $t("create_menu") }}</span>
    <main class="page-my-diary-food">
      <section v-if="!dialogCreateMenuNameVisible" class="section__name-menu">
        <div class="section__name-menu__label">
          <img
            class="create_menu__img-dish"
            src="src/assets/dish.svg"
            alt="icon dish with name Menu"
          />
          <span> Nombre del menú: Marikey menu verduras </span>
        </div>
      </section>
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
                  daysWeekMenu[dayWeek].traductorName,
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
.section__name-menu {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: right;
}
.section__name-menu__label {
  background-color: white;
  border: 2px solid;
  border-radius: 100px 15px 100px 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 28px;
}
.create_menu__img-dish {
  width: 80px;
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
  background: var(--brown);
  border-radius: 19px;
  padding: 5px;
  color: white;
}
.create-menu__card__button-edit {
  padding: 5px;
  margin-left: 10px;
  background: var(--brown-ligth-medium);
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
