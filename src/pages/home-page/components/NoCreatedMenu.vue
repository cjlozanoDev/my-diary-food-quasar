<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
</script>

<template>
  <div class="no-created-menu">
    <section class="head-sm">
      Parece que todavía no has creado ningún menú.
    </section>
    <section class="section-image">
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
.no-created-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
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

@media (min-width: 768px) {
  .no-created-menu {
    gap: 40px;
  }
  .img-chef-empty-dish {
    width: 400px;
  }
}

@media (min-width: 1200px) {
  .no-created-menu {
    gap: 60px;
  }
  .img-chef-empty-dish {
    width: 500px;
  }
}
</style>
