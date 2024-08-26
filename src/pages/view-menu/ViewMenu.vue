<script setup>
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogUpdateMainDataMenu from "src/components/dialog-update-main-data-menu/DialogUpdateMainDataMenu.vue";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useMenusStore } from "src/store/useMenusStore";
import { updateMenuApi, updateMainDataMenuApi } from "src/api/menus";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const menusStore = useMenusStore();
const dialogUpdateMainDataMenuVisible = ref(false);
const statePageStore = useStatePageStore();
const { t } = useI18n();

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

const updateMainDataMenu = async (nameMenu, descriptionMenu) => {
  statePageStore.setLoading(true, t("loading"));
  closeDialogUpdateMainDataMenuVisible();
  try {
    await updateMainDataMenuApi(
      menusStore.menuSelected.id,
      nameMenu,
      descriptionMenu
    );
    menusStore.setMainDataMenu({
      id: menusStore.menuSelected.id,
      nameMenu,
      description: descriptionMenu,
    });
  } catch (error) {
    throw new Error(error.message);
  } finally {
    statePageStore.setLoading(false);
  }
};

const markMenuToCurrent = () => {
  menusStore.markCurrentMenu(menusStore.menuSelected.id);
};

const openDialogUpdateMainDataMenuVisible = () => {
  dialogUpdateMainDataMenuVisible.value = true;
};

const closeDialogUpdateMainDataMenuVisible = () => {
  dialogUpdateMainDataMenuVisible.value = false;
};
</script>

<template>
  <div v-if="menusStore.menuSelected">
    <span class="head-diary-food head-subtitle">
      Ver menú: {{ menusStore.menuSelected.name }}
      <DiaryButton
        icon="edit"
        color="white"
        text-color="black"
        :round="true"
        size="xs"
        :onclick="openDialogUpdateMainDataMenuVisible"
      />
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
    <DialogUpdateMainDataMenu
      :dialog-visible="dialogUpdateMainDataMenuVisible"
      :name-menu="menusStore.menuSelected.name"
      :description-menu="menusStore.menuSelected.description"
      @updateMainDataMenu="updateMainDataMenu"
      @close-dialog="closeDialogUpdateMainDataMenuVisible"
    />
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
