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
        </q-card>
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
</style>
