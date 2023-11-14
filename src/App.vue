<script>
import LoadingPage from "./components/LoadingPage.vue";
import { defineComponent } from "vue";
import { onAuthStateChangedApi } from "src/api/auth";

onAuthStateChangedApi();

export default defineComponent({
  name: "App",
  components: {
    LoadingPage,
  },
});
</script>

<template>
  <LoadingPage />
  <router-view />
</template>
