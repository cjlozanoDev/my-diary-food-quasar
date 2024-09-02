<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { logoutApi } from "src/api/auth";
import { watch, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "src/store/useUserStore";

const rightDrawerOpen = ref(false);
const tab = ref("home");

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

watch(
  () => route.name,
  (newRouteName) => {
    tab.value = newRouteName.toLocaleLowerCase();
  }
);

const namePageRouter = computed(() => {
  return route.meta.namePage;
});

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const goToPage = (namePage) => {
  router.push({
    name: namePage,
  });
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
          <q-item
            clickable
            to="/home"
            active-class="main_layout__link-menu"
            exact
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Inicio </q-item-section>
          </q-item>

          <q-item
            clickable
            to="/list-menus"
            active-class="main_layout__link-menu"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="restaurant_menu" />
            </q-item-section>

            <q-item-section> Mis menús </q-item-section>
          </q-item>

          <q-item
            clickable
            to="create-menu"
            active-class="main_layout__link-menu"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="add_circle" />
            </q-item-section>

            <q-item-section> Crear menú </q-item-section>
          </q-item>

          <q-item
            clickable
            active-class="main_layout__link-menu"
            @click="logout"
            v-ripple
          >
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
          <div class="text-weight-bold">Chef</div>
          <div>{{ userStore.email }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="main-layout__footer text-white">
      <q-tabs v-model="tab" inline-label outside-arrows mobile-arrows>
        <q-tab
          name="home"
          icon="home"
          label="Inicio"
          @click="goToPage('Home')"
        />
        <q-tab
          name="listmenus"
          icon="restaurant_menu"
          label="Mis menús"
          @click="goToPage('ListMenus')"
        />
        <q-tab
          name="createmenu"
          icon="add_circle"
          label="Crear menú"
          @click="goToPage('CreateMenu')"
        />
      </q-tabs>
      <!--  <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar> -->
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
.main_layout__link-menu {
  color: white;
  background-color: var(--q-tertiary);
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
