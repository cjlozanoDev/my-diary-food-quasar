<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  window.addEventListener("resize", onResizeAvatar);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResizeAvatar);
});

const widthSizeScreen = ref(window.innerWidth);

const sizeAvatar = computed(() => {
  if (widthSizeScreen.value >= 960) return "120px";
  return "80px";
});

const onResizeAvatar = () => {
  widthSizeScreen.value = window.innerWidth;
};

const goToLogin = () => {
  router.push({ name: "Login" });
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary header-create-account-layout">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar :size="sizeAvatar">
            <img src="/assets/LogoMyDiaryFood.png" />
          </q-avatar>
        </q-toolbar-title>
        <DiaryButton
          outline
          :label="$t('back')"
          color="primary"
          icon="arrow_back"
          @click="goToLogin"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.header-create-account-layout {
  height: 80px;
}

@media (min-width: 991px) {
  .header-create-account-layout {
    height: 120px;
  }
  .q-footer {
    display: none;
  }
}
</style>
