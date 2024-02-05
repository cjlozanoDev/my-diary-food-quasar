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
        class="create-menu__tabs bg-primary text-white shadow-2 full-width"
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
        class="create-menu__tab_panels"
        v-model="tab"
        animated
      >
        <q-tab-panel
          v-for="dayWeek in Object.keys(daysWeekMenu)"
          :key="dayWeek"
          :name="dayWeek"
        >
          <q-card bordered class="create-menu__card">
            <q-card-section>
              <div class="create-menu__card__title">
                <span class="create-menu__card__title__text"
                  >{{ $t("breakfast") }}
                  <q-icon
                    class="create-menu__card__icon-edit"
                    @click="
                      showDialog(
                        daysWeekMenu[dayWeek].traductorName,
                        'breakfast',
                        daysWeekMenu[dayWeek]['breakfast']
                      )
                    "
                    name="edit"
                /></span>
              </div>
              <div class="create_memu__card__description-food">
                <span>{{ daysWeekMenu[dayWeek].breakfast }} </span>
              </div>
            </q-card-section>
          </q-card>

          <q-card bordered class="create-menu__card">
            <q-card-section>
              <div class="create-menu__card__title">
                <span class="create-menu__card__title__text"
                  >{{ $t("snackmorning") }}
                  <q-icon
                    class="create-menu__card__icon-edit"
                    @click="
                      showDialog(
                        daysWeekMenu[dayWeek].traductorName,
                        'snackmorning',
                        daysWeekMenu[dayWeek]['snackmorning']
                      )
                    "
                    name="edit"
                /></span>
              </div>
              <div class="create_memu__card__description-food">
                <span>{{ daysWeekMenu[dayWeek].snackmorning }} </span>
              </div>
            </q-card-section>
          </q-card>

          <q-card bordered class="create-menu__card">
            <q-card-section>
              <div class="create-menu__card__title">
                <span class="create-menu__card__title__text"
                  >{{ $t("lunch") }}
                  <q-icon
                    class="create-menu__card__icon-edit"
                    @click="
                      showDialog(
                        daysWeekMenu[dayWeek].traductorName,
                        'lunch',
                        daysWeekMenu[dayWeek]['lunch']
                      )
                    "
                    name="edit"
                /></span>
              </div>
              <div class="create_memu__card__description-food">
                <span>{{ daysWeekMenu[dayWeek].lunch }} </span>
              </div>
            </q-card-section>
          </q-card>

          <q-card bordered class="create-menu__card">
            <q-card-section>
              <div class="create-menu__card__title">
                <span class="create-menu__card__title__text"
                  >{{ $t("snackevening") }}
                  <q-icon
                    class="create-menu__card__icon-edit"
                    @click="
                      showDialog(
                        daysWeekMenu[dayWeek].traductorName,
                        'snackevening',
                        daysWeekMenu[dayWeek]['snackevening']
                      )
                    "
                    name="edit"
                /></span>
              </div>
              <div class="create_memu__card__description-food">
                <span>{{ daysWeekMenu[dayWeek].snackevening }} </span>
              </div>
            </q-card-section>
          </q-card>

          <q-card bordered class="create-menu__card">
            <q-card-section>
              <div class="create-menu__card__title">
                <span class="create-menu__card__title__text"
                  >{{ $t("dinner") }}
                  <q-icon
                    class="create-menu__card__icon-edit"
                    @click="
                      showDialog(
                        daysWeekMenu[dayWeek].traductorName,
                        'dinner',
                        daysWeekMenu[dayWeek]['dinner']
                      )
                    "
                    name="edit"
                /></span>
              </div>
              <div class="create_memu__card__description-food">
                <span>{{ daysWeekMenu[dayWeek].dinner }} </span>
              </div>
            </q-card-section>
          </q-card>
          <!--  <span class="create-menu__card-title">{{
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
          </p> -->
        </q-tab-panel>
      </q-tab-panels>

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
.q-tab-panels {
  background: none;
}
.q-tab-panel {
  padding: 0;
}
.create-menu__tabs,
.create-menu__tab_panels {
  width: 100%;
  max-width: 1200px;
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
  margin: 20px 0;
  min-height: 200px;
  font-size: var(--font-medium-large);
}
.create-menu__card__title {
  margin-bottom: 10px;
}
.create-menu__card__title__text {
  background-color: var(--steel);
  padding: 6px;
  color: white;
}
.create-menu__card__icon-edit {
  cursor: pointer;
}
.create_memu__card__description-food {
  font-size: var(--font-small);
}

@media (min-width: 798px) {
  .create-menu__card__title__text {
    font-size: var(--font-medium-large);
  }
  .create_memu__card__description-food {
    font-size: var(--font-medium);
  }
}
</style>
