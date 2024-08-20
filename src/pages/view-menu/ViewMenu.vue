<script setup>
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { useMenusStore } from "src/store/useMenusStore";
import { updateMenuApi } from "src/api/menus";
import { computed } from "vue";

const menusStore = useMenusStore();

const isCurrentMenu = computed(() => menusStore.menuSelected.currentMenu);

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

const markMenuToCurrent = () => {
  menusStore.markCurrentMenu(menusStore.menuSelected.id);
};
</script>

<template>
  <div v-if="menusStore.menuSelected">
    <span class="head-diary-food head-subtitle">
      Ver menú: {{ menusStore.menuSelected.name }}
    </span>

    <section class="page-my-diary-food">
      <p>
        <strong> Descripción: </strong>
        <span class="view-menu__text-decription-menu"
          >{{
            menusStore.menuSelected.description ||
            "Este menú no tiene descripción"
          }}
        </span>
      </p>
      <section class="view-menu__section-marked-menu">
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
.view-menu__section-marked-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  font-size: var(--font-medium-large);
  margin-bottom: 20px;
}
.view-menu__text-decription-menu {
  font-style: italic;
}
.article-current-menu {
  max-width: 1200px;
  width: 100%;
}
</style>
