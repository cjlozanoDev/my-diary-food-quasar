<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
</script>

<template>
  <div>
    <section class="head-subtitle">
      Parece que todavía no has creado ningún menú.
    </section>
    <section>
      <img
        class="img-chef-empty-dish"
        src="src/assets/checkEmptyDish.png"
        alt="Image Chef with empty dish"
      />
    </section>
    <section class="section__create-menu">
      <p class="text-create-menu">Crea tu primer menú</p>
      <DiaryButton color="secondary" label="Crear menú" />
    </section>
  </div>
</template>

<style scoped>
.img-chef-empty-dish {
  width: 300px;
}
.section__create-menu {
  display: flex;
  gap: 10px;
  align-items: center;
}
.text-create-menu {
  font-size: var(--font-large);
  margin-bottom: 0;
}
</style>
