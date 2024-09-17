<script setup>
import { computed, ref } from "vue";
import { sendPasswordResetEmailApi } from "src/api/auth";
import { useRouter } from "vue-router";
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";

const router = useRouter();

const widthSizeScreen = ref(window.innerWidth);
const email = ref("");
const emailSent = ref(false);

const sizeAvatar = computed(() => {
  if (widthSizeScreen.value >= 960) return "300px";
  return "200px";
});

const onSubmit = async () => {
  try {
    await sendPasswordResetEmailApi(email.value);
    emailSent.value = true;
  } catch (error) {
    console.log("el error es", error);
  }
};

const goToLogin = () => {
  router.push({ name: "Login" });
};
</script>

<template>
  <div>
    <header class="forgot-password__header">
      <q-avatar class="avatar" :size="sizeAvatar">
        <img src="/assets/padlock.png" />
      </q-avatar>
      <span class="text-forgot-password" v-text="'¿Olvidaste la contraseña?'" />
      <p>
        No pasa nada, introduce la dirección de correo electrónico de tu cuenta
        y te enviamos un enlace para reestablecer tu contraseña.
      </p>
    </header>

    <main class="page-my-diary-food">
      <section v-if="!emailSent" class="section-container-form">
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

      <section class="section-email-sent" v-else>
        <p>
          El email para reestablecer la contraseña ha sido enviado al email
          proporcionado. Sigue los pasos indicados en él.
        </p>
        <DiaryButton
          label="Volver a la pantalla principal"
          :onclick="goToLogin"
          color="primary"
        />
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
.section-email-sent {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffff;
  padding: var(--spacing-sm);
  border: solid;
}
</style>
