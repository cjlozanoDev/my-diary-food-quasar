<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogCreateFood from "./components/DialogCreateFood.vue";
import DialogCreateMenuName from "./components/DialogCreateMenuName.vue";
import { useCreateFood } from "./composables/useCreateFood";
import { ref } from "vue";

const tab = ref("monday");

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
    <span class="head-diary-food head-subtitle">Nombre: Menú alpiste</span>
    <main class="page-my-diary-food">
      <q-tabs
        v-if="!dialogCreateMenuNameVisible"
        v-model="tab"
        inline-label
        outside-arrows
        mobile-arrows
        class="bg-primary text-white shadow-2 full-width"
      >
        <q-tab name="monday" icon="today" label="Lunes"></q-tab>
        <q-tab name="tuesday" icon="today" label="Martes"></q-tab>
        <q-tab name="wednesday" icon="today" label="Miércoles"></q-tab>
        <q-tab name="thursday" icon="today" label="Jueves"></q-tab>
        <q-tab name="friday" icon="today" label="Viernes"></q-tab>
        <q-tab name="saturday" icon="today" label="Sábado"></q-tab>
        <q-tab name="sunday" icon="today" label="Domingo"></q-tab>
      </q-tabs>

      <q-tab-panels
        v-if="!dialogCreateMenuNameVisible"
        class="tab_panels"
        v-model="tab"
        animated
      >
        <q-tab-panel
          v-for="dayWeek in Object.keys(daysWeekMenu)"
          :key="dayWeek"
          :name="dayWeek"
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
        </q-tab-panel>
      </q-tab-panels>

      <!--  <div
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
      </div> -->

      <section v-if="dialogCreateMenuNameVisible">
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
.tab_panels {
  width: 100%;
}
.section__name-menu {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: right;
}
.section__tabs {
  max-width: 1200px;
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
