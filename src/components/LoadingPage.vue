<script setup>
import { watch } from "vue";
import { useQuasar } from "quasar";
import { useStatePageStore } from "src/store/useStatePageStore";

const statePageStore = useStatePageStore();
const $q = useQuasar();

watch(
  () => statePageStore.loading,
  (valueLoading) => {
    if (valueLoading) {
      $q.loading.show({
        message: statePageStore.message,
      });
    }
    if (!valueLoading) {
      $q.loading.hide();
    }
  }
);
</script>

<template>
  <div></div>
</template>
