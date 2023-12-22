<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
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
  <div class="page-my-diary-food">
    <main>
      <h2>{{ $t("label_your_current_menu") }}</h2>
      <SkeletonCardMenu v-if="loadingCurrenMenu" :number-repeat="3" />
      <div v-else>
        <p v-if="!Object.keys(currentMenu).length">No has creado menús</p>
        <p v-else>Aquí irá tu menú</p>
      </div>
    </main>
  </div>
</template>
