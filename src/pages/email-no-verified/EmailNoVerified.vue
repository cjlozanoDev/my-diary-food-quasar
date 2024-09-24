<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { logoutApi, sendEmailVerificationApi, auth } from "src/api/auth";
import { useStatePageStore } from "src/store/useStatePageStore";
import { showNotification } from "src/utils/notifications";
import { useI18n } from "vue-i18n";
import DiaryButton from "src/components/Button/DiaryButton.vue";

const widthSizeScreen = ref(window.innerWidth);

const { t } = useI18n();
const router = useRouter();
const statePageStore = useStatePageStore();

const sizeAvatar = computed(() => {
  if (widthSizeScreen.value >= 960) return "200px";
  return "100px";
});

const forwardEmail = async () => {
  statePageStore.setLoading(true, t("loading"));
  try {
    await sendEmailVerificationApi();
    showNotification("El email ha sido enviado");
  } catch (error) {
    throw new Error(error.message);
  } finally {
    statePageStore.setLoading(false, t("loading"));
  }
};

const goToLogin = async () => {
  await logoutApi();
  router.push({
    name: "Login",
  });
};
</script>

<template>
  <header class="email-no-verified__header">
    <q-avatar
      icon="gpp_maybe"
      text-color="white"
      color="red"
      :size="sizeAvatar"
    />
    <p><strong>La cuenta aún no ha sido verificada</strong></p>
  </header>
  <main class="page-my-diary-food center">
    <section class="info-box">
      <p>
        Se ha enviado un email al correo proporcionado para que puedas verificar
        tu cuenta. Sigue los pasos indicados en él.
      </p>
      <DiaryButton
        label="Reenviar correo"
        :onclick="forwardEmail"
        color="primary"
      />
      <p>O</p>
      <DiaryButton outline label="Iniciar sesión" :onclick="goToLogin" />
    </section>
  </main>
</template>

<style scoped>
.email-no-verified__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-md);
}
</style>
