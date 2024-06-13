<script setup>
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import { useMenusStore } from "src/store/useMenusStore";
import { updateMenuApi } from "src/api/menus";

const menusStore = useMenusStore();

const updateWeekMenu = async (descriptionFood, dayWeek, nameMomentFood) => {
  menusStore.setMenuWeek({
    id: menusStore.menuSelected.id,
    descriptionFood,
    dayWeek,
    nameMomentFood,
  });

  try {
    await updateMenuApi(
      menusStore.menuSelected.id,
      menusStore.menuSelected.menu
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
</script>

<template>
  <div v-if="menusStore.menuSelected">
    <span class="head-diary-food head-subtitle">
      Ver menú: {{ menusStore.menuSelected.name }}
    </span>
    <section class="page-my-diary-food">
      <article class="article-current-menu">
        <BoardMenu
          :week-menu="menusStore.menuSelected"
          @save-food="updateWeekMenu"
        />
      </article>
    </section>
  </div>
</template>

<style scoped>
.article-current-menu {
  max-width: 1200px;
  width: 100%;
}
</style>
