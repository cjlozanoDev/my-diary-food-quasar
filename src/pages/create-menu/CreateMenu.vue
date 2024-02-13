<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import DialogCreateMenuName from "./components/DialogCreateMenuName.vue";
import { useCreateFood } from "./composables/useCreateFood";
import { ref } from "vue";

const tab = ref("monday");

const {
  backToHome,
  closeDialog,
  createMenu,
  saveFood,
  markMenuToCurrent,
  isCurrentMenu,
  nameMenu,
  menuCreated,
  dayWeekSelected,
  descriptionFoodSelected,
  dialogCreateMenuNameVisible,
  dialogCreateMenuVisible,
  nameMomentFoodSelected,
} = useCreateFood();
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">Nombre: {{ nameMenu }}</span>
    <main v-if="!dialogCreateMenuNameVisible" class="page-my-diary-food">
      <section class="create_menu__section-marked-menu">
        <DiaryButton
          push
          color="white"
          label="Marcar este menú como actual"
          text-color="primary"
          icon="push_pin"
          :onclick="markMenuToCurrent"
          :disable="isCurrentMenu"
        />
        <span v-if="isCurrentMenu"> *Este menú ya es tu menu actual</span>
      </section>

      <section v-if="menuCreated" class="create_menu__section-board-menu">
        <BoardMenu :week-menu="menuCreated" />
      </section>

      <!--  <q-tabs
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

      <q-tab-panels class="create-menu__tab_panels" v-model="tab" animated>
        <q-tab-panel
          v-for="dayWeek in Object.keys(daysWeekMenu)"
          :key="dayWeek"
          :name="dayWeek"
        >
          <q-card bordered class="create-menu__card">
            <q-card-section>
              <div class="create-menu__card__title">
                <span class="create-menu__card__title__text">
                  {{ $t("breakfast") }}
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
                  />
                </span>
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
        </q-tab-panel>
      </q-tab-panels>

      <section>
        <DialogCreateFood
          v-model="dialogCreateMenuVisible"
          :day-week="dayWeekSelected"
          :name-moment-food="nameMomentFoodSelected"
          :description-food-prop="descriptionFoodSelected"
          @saveFood="saveFood"
          @close-dialog="closeDialog"
        /> 
      </section> -->
    </main>
    <section v-if="dialogCreateMenuNameVisible">
      <DialogCreateMenuName
        :dialog-visible="dialogCreateMenuNameVisible"
        @create-menu="createMenu"
        @close-dialog="backToHome"
      />
    </section>
  </div>
</template>

<style scoped>
.page-my-diary-food__container__menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.create_menu__section-marked-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  font-size: var(--font-medium-large);
  margin-bottom: 20px;
}
.create_menu__section-board-menu {
  width: 100%;
  max-width: 1200px;
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
.create-menu__card {
  margin: 20px 0;
  min-height: 200px;
  font-size: var(--font-medium-large);
  background-image: linear-gradient(
    rgb(169, 182, 183) 0%,
    rgb(228, 232, 233) 50%
  );
}
.create-menu__card__title {
  margin-bottom: 10px;
}
.create-menu__card__title__text {
  border-bottom: 4px solid var(--steel-dark);
  color: var(--steel-dark);
  padding: 6px;
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
