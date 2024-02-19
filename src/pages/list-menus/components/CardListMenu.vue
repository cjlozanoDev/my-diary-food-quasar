<script setup>
defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <section class="card-list-menu" v-if="Object.keys(menu)">hola</section>
</template>

<style scoped>
.card-list-menu {
  background: var(--q-primary-extra-ligth);
  height: 100px;
  width: 100%;
  position: relative;
}

.card-list-menu:before {
  content: "";
  position: absolute;
  border-bottom: 50px solid transparent;
  border-right: 50px solid red;
  border-top: 50px solid transparent;
  height: 100px;
  width: 0px;
  margin-left: -20px;
}
</style>
