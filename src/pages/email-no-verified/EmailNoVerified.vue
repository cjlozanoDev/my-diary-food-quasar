<script setup>
import { logoutApi } from "src/api/auth";
import DiaryButton from "src/components/Button/DiaryButton.vue";

const logout = async () => {
  await logoutApi();
  router.push({
    name: "Login",
  });
};
</script>

<template>
  <h1>El email no ha sido verificado aún</h1>
  <DiaryButton :onclick="logout" />
</template>
