<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const changeLanguage = () => {
  locale.value = "en-US";
};
</script>

<template>
  <div class="login">
    <header class="login-header">
      <q-avatar size="100px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <span class="login-header__title-app"> My diary food</span>
    </header>

    <main class="page-my-diary-food">
      <article class="article-main">
        <h2>¡¡{{ $t("hello") }}!!</h2>
        <section class="section-form">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              filled
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'Please type your age',
                (val) => (val > 0 && val < 100) || 'Please type a real age',
              ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn :label="$t('entry')" type="submit" color="accent" />
            </div>
          </q-form>
          <button @click="changeLanguage">cambiar a inglés</button>
        </section>
      </article>
    </main>
  </div>
</template>

<style>
.login-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: var(--spacing-lg) 0;
  border-radius: 0 0 50% 50%;
  gap: var(--spacing-md);
}
.login-header__title-app {
  font-size: var(--font-large);
}
.article-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--spacing-md);
}
.section-form {
  width: 80%;
}
</style>
