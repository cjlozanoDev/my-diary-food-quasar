<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
