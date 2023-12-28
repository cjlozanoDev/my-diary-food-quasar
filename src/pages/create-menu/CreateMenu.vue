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
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{ $t("create_menu") }}</span>
    <main class="page-my-diary-food">
      <section class="create-menu__card">
        <span class="card-title">LUNES</span>
        <p class="create-menu__card__text-day">
          Desayuno
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color=""
            :onclick="showDialog('Lunes', 'Desayuno')"
          />
        </p>
        <p class="create-menu__card__text-food">
          Esto sería lo que yo qiero para desayunar, es bien sano además, habrái
          que ver más cosas
        </p>
        <p class="create-menu__card__text-day">
          Comida
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color="secondary"
          />
        </p>
        <p class="create-menu__card__text-food">
          Esto sería lo que yo qiero para desayunar, es bien sano además, habrái
          que ver más cosas
        </p>
        <p class="create-menu__card__text-day">
          Merienda
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color="secondary"
          />
        </p>
        <p class="create-menu__card__text-food">
          Esto sería lo que yo qiero para desayunar, es bien sano además, habrái
          que ver más cosas
        </p>
        <p class="create-menu__card__text-day">
          Cena
          <DiaryButton
            icon="edit"
            size="xs"
            class="create-menu__card__button-edit"
            color="secondary"
          />
        </p>
        <p class="create-menu__card__text-food">
          Esto sería lo que yo qiero para desayunar, es bien sano además, habrái
          que ver más cosas Esto sería lo que yo qiero para desayunar, es bien
          sano además, habrái que ver más cosasEsto sería lo que yo qiero para
          desayunar, es bien sano además, habrái que ver más cosasEsto sería lo
          que yo qiero para desayunar, es bien sano además, habrái que ver más
          cosasEsto sería lo que yo qiero para desayunar, es bien sano además,
          habrái que ver más cosasEsto sería lo que yo qiero para desayunar, es
          bien sano además, habrái que ver más cosasEsto sería lo que yo qiero
          para desayunar, es bien sano además, habrái que ver más cosasEsto
          sería lo que yo qiero para desayunar, es bien sano además, habrái que
          ver más cosasEsto sería lo que yo qiero para desayunar, es bien sano
          además, habrái que ver más cosasEsto sería lo que yo qiero para
          desayunar, es bien sano además, habrái que ver más cosasEsto sería lo
          que yo qiero para desayunar, es bien sano además, habrái que ver más
          cosasEsto sería lo que yo qiero para desayunar, es bien sano además,
          habrái que ver más cosasEsto sería lo que yo qiero para desayunar, es
          bien sano además, habrái que ver más cosasEsto sería lo que yo qiero
          para desayunar, es bien sano además, habrái que ver más cosasEsto
          sería lo que yo qiero para desayunar, es bien sano además, habrái que
          ver más cosasEsto sería lo que yo qiero para desayunar, es bien sano
          además, habrái que ver más cosasEsto sería lo que yo qiero para
          desayunar, es bien sano además, habrái que ver más cosasEsto sería lo
          que yo qiero para desayunar, es bien sano además, habrái que ver más
          cosasEsto sería lo que yo qiero para desayunar, es bien sano además,
          habrái que ver más cosasEsto sería lo que yo qiero para desayunar, es
          bien sano además, habrái que ver más cosasEsto sería lo que yo qiero
          para desayunar, es bien sano además, habrái que ver más cosasEsto
          sería lo que yo qiero para desayunar, es bien sano además, habrái que
          ver más cosasEsto sería lo que yo qiero para desayunar, es bien sano
          además, habrái que ver más cosasEsto sería lo que yo qiero para
          desayunar, es bien sano además, habrái que ver más cosas
        </p>
      </section>
      <section class="create-menu__card">
        <span class="card-title">MARTES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">MIERCOLES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">JUEVES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">VIERNES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">SÁBADO</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">DOMINGO</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
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
.card-title {
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
}

@media (min-width: 798px) {
  .create-menu__card {
    font-size: var(--font-medium-large);
    margin-bottom: var(--spacing-xl);
  }
  .card-title {
    top: -57px;
  }
  .create-menu__card__text-food {
    line-height: 45px;
  }
}
</style>
