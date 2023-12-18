<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
import { getMenusUserApi } from "src/api/menus";
import { onMounted, ref } from "vue";

const menusUser = ref([]);
onMounted(() => {
  getMenusUser();
});

const getMenusUser = async () => {
  try {
    menusUser.value = await getMenusUserApi();
  } catch (error) {
    throw new Error(error.message);
  }
};
</script>

<template>
  <div class="page-my-diary-food">
    <main>
      <h2>{{ $t("label_your_current_menu") }}</h2>
      <SkeletonCardMenu :number-repeat="3" />
    </main>
  </div>
</template>
