<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";

onMounted(() => {
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize");
});

const widthSizeScreen = ref(window.innerWidth);

const sizeAvatar = computed(() => {
  if (widthSizeScreen.value >= 960) return "300px";
  return "200px";
});

const onResize = () => {
  widthSizeScreen.value = window.innerWidth;
};
</script>

<template>
  <div class="create-account">
    <header class="create-account__header">
      <q-avatar :size="sizeAvatar">
        <img src="src/assets/AvatarChef.jpeg" />
      </q-avatar>
    </header>
    <main class="page-my-diary-food">
      <h2>Crear cuenta</h2>
    </main>
  </div>
</template>

<style scoped>
.create-account__header {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
