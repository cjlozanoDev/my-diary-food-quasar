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
  <div class="content">
    <LoadingPage />
    <router-view />
  </div>
</template>
