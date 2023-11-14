<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-btn color="negative" @click="logout">Salir</q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { logoutApi } from "src/api/auth";

export default defineComponent({
  name: "IndexPage",
  methods: {
    logout() {
      logoutApi();
    },
  },
});
</script>
