<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
import NoCreatedMenu from "./components/NoCreatedMenu.vue";
import { getCurrenMenuApi } from "src/api/menus";
import { onMounted, ref } from "vue";

const currentMenu = ref({});
const loadingCurrenMenu = ref(true);

onMounted(() => {
  getMenusUser();
});

const getMenusUser = async () => {
  try {
    const querySnapshot = await getCurrenMenuApi();

    if (querySnapshot.size > 0) {
      currentMenu.value = querySnapshot.docs[0].data();
    }
    loadingCurrenMenu.value = false;
  } catch (error) {
    throw new Error(error.message);
  }
};
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">{{
      $t("label_your_current_menu")
    }}</span>
    <main class="page-my-diary-food content-center">
      <SkeletonCardMenu v-if="loadingCurrenMenu" :number-repeat="3" />
      <article class="article-current-menu" v-else>
        <NoCreatedMenu v-if="!Object.keys(currentMenu).length" />
        <p v-else>Aquí irá tu menú</p>
      </article>
    </main>
  </div>
</template>
