<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";

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

const onSubmit = () => {};
</script>

<template>
  <div class="create-account">
    <header class="create-account__header">
      <q-avatar :size="sizeAvatar">
        <img src="src/assets/AvatarChef.jpeg" />
      </q-avatar>
      <span class="text-create-acccount">Crear cuenta</span>
    </header>
    <main class="page-my-diary-food center">
      <section class="section-container-form">
        <q-card class="create-account__card-form">
          <q-card-section>
            <q-form
              @submit.prevent="onSubmit"
              class="section-container-form__form"
              ><q-input
                outlined
                type="text"
                :label="`${$t('label_name')} *`"
                lazy-rules
                reactive-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                ]"
                color="secondary"
              />
              <q-input
                outlined
                type="email"
                :label="`${$t('label_email')} *`"
                lazy-rules
                reactive-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                ]"
                color="secondary"
              />
              <q-input
                outlined
                :label="`${$t('label_password')} *`"
                type="password"
                lazy-rules
                reactive-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('type_something'),
                  (val) =>
                    (val && val.length > 5) ||
                    $t('min_characters', { number: 6 }),
                ]"
                color="secondary"
              />

              <div class="section_form__actions">
                <q-btn
                  :label="$t('entry')"
                  type="submit"
                  color="secondary"
                  class="btn-login"
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
.section-container-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--spacing-sm);
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
</style>
