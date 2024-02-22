<script setup>
import { computed } from "vue";
import { useMenusStore } from "src/store/useMenusStore";
import { useStatePageStore } from "src/store/useStatePageStore";
import SkeletonCardListMenu from "components/skeletons/SkeletonCardListMenu.vue";
import CardListMenu from "./components/CardListMenu.vue";

const menusStore = useMenusStore();
const statePageStore = useStatePageStore();

const menusComputed = computed(() => {
  return menusStore.menus;
});
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">Tus menús</span>

    <section class="page-my-diary-food">
      <SkeletonCardListMenu
        custom-class="section_skeleton"
        v-if="statePageStore.loadingMenus"
        :number-repeat="4"
      />
      <section class="section-list-menus__card-list" v-else>
        <CardListMenu
          v-for="menu in menusComputed"
          :key="menu.id"
          :menu="menu"
        />
      </section>
    </section>
  </div>
</template>

<style scoped>
.section_skeleton,
.section-list-menus__card-list {
  max-width: 1200px;
}
.section-list-menus__card-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
</style>
