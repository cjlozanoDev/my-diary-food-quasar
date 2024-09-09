<script setup>
import { computed, ref } from "vue";
import { sendPasswordResetEmailApi } from "src/api/auth";
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";

const widthSizeScreen = ref(window.innerWidth);
const email = ref("");

const sizeAvatar = computed(() => {
  if (widthSizeScreen.value >= 960) return "300px";
  return "200px";
});

const onSubmit = async () => {
  try {
    await sendPasswordResetEmailApi(email.value);
  } catch (error) {
    console.log("el error es", error);
  }
};
</script>

<template>
  <div>
    <header class="forgot-password__header">
      <q-avatar class="avatar" :size="sizeAvatar">
        <img src="src/assets/padlock.png" />
      </q-avatar>
      <span class="text-forgot-password" v-text="'¿Olvidaste la contraseña?'" />
      <p>
        No pasa nada, introduce la dirección de correo electrónico de tu cuenta
        y te enviamos un enlace para reestablecer tu contraseña.
      </p>
    </header>

    <main class="page-my-diary-food">
      <section class="section-container-form">
        <q-card class="section-container-form__card">
          <q-card-section>
            <q-form
              @submit.prevent="onSubmit"
              class="section-container-form__form"
            >
              <DiaryInput
                v-model="email"
                outlined
                type="email"
                label="email"
                lazy-rules
                reactive-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                ]"
                color="primary"
              />

              <div class="section_form__actions">
                <DiaryButton
                  label="Enviar correo"
                  type="submit"
                  color="primary"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </section>
    </main>
  </div>
</template>

<style scoped>
.forgot-password__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--spacing-md);
  padding: 20px;
}
.section-container-form {
  width: 100%;
  max-width: 1200px;
}
.section-container-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.avatar {
  background-color: var(--q-tertiary);
}
.text-forgot-password {
  font-size: 2em;
}
.section_form__actions {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
