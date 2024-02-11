<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
import NoCreatedMenu from "./components/NoCreatedMenu.vue";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useMenusStore } from "src/store/useMenusStore";

const statePageStore = useStatePageStore();
const menusStore = useMenusStore();
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{
      $t("label_your_current_menu")
    }}</span>
    <main class="page-my-diary-food content-center">
      <SkeletonCardMenu v-if="statePageStore.loadingMenus" :number-repeat="3" />
      <article class="article-current-menu" v-else>
        <NoCreatedMenu v-if="!Object.keys(menusStore.currentMenu).length" />
        <p v-else>Aquí irá tu menú</p>
      </article>
    </main>
  </div>
</template>
