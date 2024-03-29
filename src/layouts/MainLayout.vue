<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { logoutApi } from "src/api/auth";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const rightDrawerOpen = ref(false);
const route = useRoute();
const router = useRouter();

const namePageRouter = computed(() => {
  return route.meta.namePage;
});

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const logout = async () => {
  await logoutApi();
  router.push({
    name: "Login",
  });
};

const goToBackPage = () => {
  const nameBackRoute = route.meta.nameBackPage;
  router.push({
    name: nameBackRoute,
  });
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="main-layout__header text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar
            class="main-layout__avatar-app"
            size="50px"
            v-if="namePageRouter === 'Principal'"
          >
            <img src="src/assets/LogoMyDiaryFood.png" />
          </q-avatar>
          <DiaryButton
            v-else
            class="main-layout__button-icon-back"
            name="arrow_back"
            flat
            color="#fff"
            icon="arrow_back"
            :onclick="goToBackPage"
          />

          <span v-text="namePageRouter" class="main-layout__name-page" />
        </q-toolbar-title>

        <DiaryButton dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable @click="logout" v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> Cerrar sesión </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="src/assets/AvatarChef.jpeg" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="main-layout__footer text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.main-layout__header {
  background-color: var(--steel);
}
.main-layout__button-icon-back {
  margin-right: var(--spacing-sm);
  padding-left: 0;
}
.main-layout__avatar-app {
  margin-right: var(--spacing-sm);
}
.main-layout__name-page {
  font-size: var(--font-medium);
}
.main-layout__footer {
  background-color: var(--q-tertiary);
}
.q-toolbar__title {
  display: flex;
  align-items: center;
}
.q-btn--dense.q-btn--round {
  color: white !important;
}

@media (min-width: 991px) {
  .main-layout__name-page {
    font-size: var(--font-large);
  }
}
</style>
