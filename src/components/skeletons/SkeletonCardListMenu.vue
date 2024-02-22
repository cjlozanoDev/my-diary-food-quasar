<script setup>
defineProps({
  numberRepeat: {
    type: Number,
    default: 1,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    v-for="n in numberRepeat"
    :key="n"
    :class="[customClass, 'skeleton-card-menu']"
  >
    <q-skeleton height="150px" type="rect" />
  </div>
</template>

<style scoped>
.skeleton-card-menu {
  margin-top: var(--spacing-md);
  width: 100%;
}
</style>
