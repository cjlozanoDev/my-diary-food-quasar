<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
import BoardMenu from "src/components/BoardMenu/BoardMenu.vue";
import NoCreatedMenu from "./components/NoCreatedMenu.vue";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useMenuHome } from "./composables/useMenuHome";

const statePageStore = useStatePageStore();
const { updateWeekMenu, currentMenu } = useMenuHome();
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle"
      >{{ $t("label_your_current_menu") }}: {{ currentMenu.name }}
    </span>
    <main class="page-my-diary-food content-center">
      <SkeletonCardMenu v-if="statePageStore.loadingMenus" :number-repeat="3" />
      <article class="article-current-menu" v-else>
        <NoCreatedMenu v-if="!Object.keys(currentMenu).length" />
        <BoardMenu
          v-else
          :week-menu="currentMenu"
          @save-food="updateWeekMenu"
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
</style>
