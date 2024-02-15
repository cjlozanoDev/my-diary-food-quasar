<script setup>
import DialogCreateFood from "./DialogCreateFood.vue";
import { computed, ref } from "vue";
import { useBoardMenu } from "./composables/useBoardMenu";

const props = defineProps({
  weekMenu: {
    type: Object,
    default: () => {},
  },
});

const {
  dialogCreateFoodVisible,
  nameMomentFoodSelected,
  descriptionFoodSelected,
  dayWeekSelected,
  foodNames,
  saveFood,
  showDialog,
  closeDialog,
} = useBoardMenu();

const tab = ref("monday");

const daysWeekMenu = computed(() => {
  return Object.keys(props.weekMenu).length
    ? JSON.parse(props.weekMenu.menu)
    : {};
});
</script>

<template>
  <div v-if="Object.keys(weekMenu).length">
    <q-tabs
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
        <div
          v-for="typeFood in foodNames"
          :key="typeFood"
          class="board-menu__card"
        >
          <section class="board-menu__card__section-day">
            {{ $t(typeFood) }}
          </section>
          <hr class="board-menu__card__hr" />
          <section class="board-menu__card__section-food">
            {{ daysWeekMenu[dayWeek][typeFood] }}
          </section>
        </div>
        <!-- <q-card bordered class="create-menu__card">
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
              <span class="create-menu__card__title__text">
                {{ $t("dinner") }}
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
                />
              </span>
            </div>
            <div class="create_memu__card__description-food">
              <span>{{ daysWeekMenu[dayWeek].dinner }} </span>
            </div>
          </q-card-section>
        </q-card> -->
      </q-tab-panel>
    </q-tab-panels>

    <section>
      <DialogCreateFood
        v-model="dialogCreateFoodVisible"
        :day-week="dayWeekSelected"
        :name-moment-food="nameMomentFoodSelected"
        :description-food-prop="descriptionFoodSelected"
        @saveFood="saveFood"
        @close-dialog="closeDialog"
      />
    </section>
  </div>
</template>

<style scoped>
.board-menu__card {
  width: 100%;
  max-width: 1200px;
  margin: 20px 0px;
}
.board-menu__card__hr {
  border: 0;
  height: 2px;
  background-color: white;
  margin: 0;
}
.board-menu__card__section-day {
  display: flex;
  align-items: center;
  font-size: var(--font-medium-large);
  background: var(--q-primary-ligth);
  min-height: 40px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 10px;
}
.board-menu__card__section-food {
  background: var(--q-primary-ligth);
  min-height: 140px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
}
.q-tab-panels {
  background: none;
}
.q-tab-panel {
  padding: 0;
}
</style>
