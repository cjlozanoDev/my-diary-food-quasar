<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-page-container {
  height: 100vh;
}
@media (min-width: 991px) {
  .q-footer {
    display: none;
  }
}
</style>
