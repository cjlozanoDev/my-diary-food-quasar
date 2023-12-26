<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToCreateMenu = () => {
  router.push({
    name: "CreateMenu",
  });
};
</script>

<template>
  <div class="no-created-menu">
    <section class="head-sm">
      {{ $t("no_menu_created") }}
    </section>
    <section class="section-image">
      <img
        class="img-chef-empty-dish"
        src="src/assets/checkEmptyDish.png"
        alt="Image Chef with empty dish"
      />
    </section>
    <section class="section__create-menu">
      <p class="text-create-menu">{{ $t("create_first_menu") }}</p>
      <DiaryButton
        color="secondary"
        :onclick="goToCreateMenu"
        label="Crear menú"
      />
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
