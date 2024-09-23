<script>
import LoadingPage from "./components/LoadingPage.vue";
import { defineComponent } from "vue";
import { onAuthStateChangedApi } from "src/api/auth";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    LoadingPage,
  },
  mounted() {
    const router = useRouter();
    const route = useRoute();
    onAuthStateChangedApi(router, route);
  },
});
</script>

<template>
  <div class="content">
    <LoadingPage />
    <router-view />
  </div>
</template>
