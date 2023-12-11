<script setup>
defineProps({
  numberRepeat: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <div v-for="n in numberRepeat" :key="n" class="skeleton-card-menu">
    <q-card class="skeleton-card-menu__q-card">
      <q-item>
        <q-item-section>
          <q-skeleton
            class="skeleton-card-menu__q-card__toolbar"
            type="QToolbar"
          />
        </q-item-section>
      </q-item>

      <q-skeleton
        class="skeleton-card-menu__q-card__square"
        height="200px"
        square
      />
    </q-card>
  </div>
</template>

<style scoped>
.skeleton-card-menu {
  width: 100%;
  margin-top: var(--spacing-md);
}
.q-item {
  width: 100%;
  padding: 0;
}
.skeleton-card-menu__q-card {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
}
.skeleton-card-menu__q-card__toolbar {
  width: 200px;
}
.skeleton-card-menu__q-card__square {
  width: 100%;
}

@media (min-width: 991px) {
  .skeleton-card-menu__q-card__toolbar {
    width: 300px;
  }
}
</style>
