<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import DialogCreateMenuName from "./components/DialogCreateMenuName.vue";
import { useCreateFood } from "./composables/useCreateFood";
import { ref } from "vue";

const tab = ref("monday");

const {
  backToHome,
  createMenu,
  saveFood,
  markMenuToCurrent,
  isCurrentMenu,
  nameMenu,
  menuCreated,
  dialogCreateMenuNameVisible,
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
        <BoardMenu :week-menu="menuCreated" @save-food="saveFood" />
      </section>
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
