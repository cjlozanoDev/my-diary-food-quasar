<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import NoCreatedMenu from "./components/NoCreatedMenu.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DialogUpdateMainDataMenu from "src/components/dialog-update-main-data-menu/DialogUpdateMainDataMenu.vue";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useMenuHome } from "./composables/useMenuHome";

const statePageStore = useStatePageStore();
const {
  updateWeekMenu,
  openDialogUpdateMainDataMenuVisible,
  closeDialogUpdateMainDataMenuVisible,
  updateMainDataMenu,
  currentMenu,
  dialogUpdateMainDataMenuVisible,
} = useMenuHome();
</script>

<template>
  <div>
    <span class="head-diary-food head-sm"
      >{{ $t("label_your_current_menu") }}: {{ currentMenu.name }}
      <DiaryButton
        icon="edit"
        color="white"
        text-color="black"
        :round="true"
        size="xs"
        :onclick="openDialogUpdateMainDataMenuVisible"
      />
    </span>
    <main class="page-my-diary-food content-center">
      <SkeletonCardMenu v-if="statePageStore.loadingMenus" :number-repeat="3" />
      <article class="article-current-menu" v-else>
        <NoCreatedMenu v-if="!Object.keys(currentMenu).length" />
        <p v-if="Object.keys(currentMenu).length">
          <strong> Descripción: </strong>
          <span class="home__text-decription-menu"
            >{{ currentMenu.description || "Este menú no tiene descripción" }}
          </span>
        </p>
        <BoardMenu
          v-if="Object.keys(currentMenu).length"
          :week-menu="currentMenu"
          @save-food="updateWeekMenu"
        />
        <DialogUpdateMainDataMenu
          :dialog-visible="dialogUpdateMainDataMenuVisible"
          :name-menu="currentMenu.name"
          :description-menu="currentMenu.description"
          @updateMainDataMenu="updateMainDataMenu"
          @close-dialog="closeDialogUpdateMainDataMenuVisible"
        />
      </article>
    </main>
  </div>
</template>

<style scoped>
.article-current-menu {
  max-width: 1200px;
  width: 100%;
}
.home-page__button-edit-principal-data {
  background-color: #576669;
}
.home__text-decription-menu {
  font-style: italic;
}
</style>
