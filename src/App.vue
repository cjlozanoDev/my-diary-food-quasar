<script>
import LoadingPage from "./components/LoadingPage.vue";
import { defineComponent } from "vue";
import { onAuthStateChangedApi } from "src/api/auth";

export default defineComponent({
  name: "App",
  components: {
    LoadingPage,
  },
  mounted() {
    onAuthStateChangedApi();
  },
});
</script>

<template>
  <div class="content">
    <LoadingPage />
    <router-view />
  </div>
</template>
