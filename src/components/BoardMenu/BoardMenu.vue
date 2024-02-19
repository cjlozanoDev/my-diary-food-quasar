<script setup>
import DialogCreateFood from "./DialogCreateFood.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { computed, ref } from "vue";
import { useBoardMenu } from "./composables/useBoardMenu";

const emit = defineEmits(["save-food"]);

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
} = useBoardMenu(emit);

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
            <span> {{ $t(typeFood) }} </span>
            <DiaryButton
              icon="edit"
              class="board-menu__card__section-day__icon"
              color="#ff0000"
              :round="true"
              size="xs"
              :onclick="
                showDialog(dayWeek, typeFood, daysWeekMenu[dayWeek][typeFood])
              "
            />
          </section>
          <hr class="board-menu__card__hr" />
          <section class="board-menu__card__section-food">
            <span v-if="daysWeekMenu[dayWeek][typeFood].length"
              >{{ daysWeekMenu[dayWeek][typeFood] }}
            </span>
            <span class="board-menu__card__section_food__no-text" v-else
              >¡Ups! Parece que aún no has añadido nada. <br />Para escribir,
              haz click en el lapiz que está en la parte superior de esta
              tarjeta.</span
            >
          </section>
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <section>
      <DialogCreateFood
        v-model="dialogCreateFoodVisible"
        :day-week="dayWeekSelected === '' ? '' : $t(dayWeekSelected)"
        :name-moment-food="
          nameMomentFoodSelected === '' ? '' : $t(nameMomentFoodSelected)
        "
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
  background: var(--q-primary-extra-ligth);
  min-height: 40px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 10px;
}
.board-menu__card__section-day__icon {
  margin-left: 10px;
  background-color: var(--q-primary-ligth);
}
.board-menu__card__section-food {
  background: var(--q-primary-extra-ligth);
  min-height: 140px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
}
.board-menu__card__section_food__no-text {
  font-style: italic;
  font-size: 0.9em;
}
.q-tab-panels {
  background: none;
}
.q-tab-panel {
  padding: 0;
}
</style>
