<script setup>
import { computed } from "vue";
import { useMenusStore } from "src/store/useMenusStore";
import CardListMenu from "./components/CardListMenu.vue";

const menusStore = useMenusStore();

const menusComputed = computed(() => {
  return menusStore.menus;
});
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">Tus menús</span>

    <section class="page-my-diary-food">
      <CardListMenu
        class="list-menus__card-list"
        v-for="menu in menusComputed"
        :key="menu.id"
        :menu="menu"
      />
    </section>
  </div>
</template>

<style scoped>
.list-menus__card-list {
  margin-bottom: 20px;
  max-width: 1200px;
}
</style>
