<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useServicesCreateAccount } from "./composables/useServicesCreateAccount";

onMounted(() => {
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

const widthSizeScreen = ref(window.innerWidth);

const sizeAvatar = computed(() => {
  if (widthSizeScreen.value >= 960) return "300px";
  return "200px";
});

const onResize = () => {
  widthSizeScreen.value = window.innerWidth;
};

const { username, email, password, errorEmailAlreadyInUse, onSubmit } =
  useServicesCreateAccount();
</script>

<template>
  <div class="create-account">
    <header class="create-account__header">
      <q-avatar :size="sizeAvatar">
        <img src="/assets/avatarChef.png" />
      </q-avatar>
      <span class="text-create-acccount" v-text="$t('create_account')" />
    </header>
    <main class="page-my-diary-food center">
      <section class="section-container-form">
        <q-card class="create-account__card-form">
          <q-card-section>
            <q-form
              @submit.prevent="onSubmit"
              class="section-container-form__form"
            >
              <q-banner
                v-if="errorEmailAlreadyInUse"
                inline-actions
                class="banner-error"
              >
                <span v-text="$t('email_already_in_use')" />
              </q-banner>
              <DiaryInput
                v-model="username"
                outlined
                type="text"
                :label="`${$t('label_name')} *`"
                lazy-rules
                reactive-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                ]"
                color="primary"
              />

              <DiaryInput
                v-model="email"
                outlined
                type="email"
                :label="`${$t('label_email')} *`"
                lazy-rules
                reactive-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                ]"
                color="primary"
              />
              <DiaryInput
                v-model="password"
                outlined
                :label="`${$t('label_password')} *`"
                type="password"
                lazy-rules
                reactive-rules
                autocomplete="on"
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                  (val) =>
                    (val && val.length > 5) ||
                    $t('min_characters', { number: 6 }),
                ]"
                color="primary"
              />

              <div class="section_form__actions">
                <DiaryButton
                  :label="$t('create_account')"
                  type="submit"
                  color="primary"
                  class="btn-create-account"
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
.create-account__header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.section-container-form {
  width: 100%;
  display: flex;
  justify-content: center;
}
.create-account__card-form {
  padding: var(--spacing-sm);
}
.section-container-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.section_form__actions {
  display: flex;
  justify-content: center;
}
.text-create-acccount {
  font-size: 2em;
}
.create-account__card-form {
  width: 100%;
  max-width: 1200px;
}
.btn-create-account {
  height: 50px;
  width: 100%;
}
</style>
