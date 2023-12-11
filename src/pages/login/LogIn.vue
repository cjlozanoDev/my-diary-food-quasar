<script setup>
import { useI18n } from "vue-i18n";
import { useServicesLogin } from "./composables/useServicesLogin";
import DiaryButton from "src/components/Button/DiaryButton.vue";

const { locale } = useI18n({ useScope: "global" });

const changeLanguage = () => {
  locale.value = "en-US";
};

const { email, password, errorInvalidCredentials, onSubmit } =
  useServicesLogin();
</script>

<template>
  <div class="login">
    <header class="login-header">
      <q-img
        src="src/assets/LogoMyDiaryFood.png"
        spinner-color="white"
        class="logo-app"
      />
    </header>

    <main class="page-my-diary-food">
      <article class="article-main">
        <h2>¡¡{{ $t("hello") }}!!</h2>
        <section class="section-container-form">
          <q-card>
            <q-card-section>
              <q-form
                @submit.prevent="onSubmit"
                class="section-container-form__form"
              >
                <q-banner
                  v-if="errorInvalidCredentials"
                  inline-actions
                  class="banner-error"
                >
                  <span v-text="$t('invalid_credentials')" />
                </q-banner>

                <q-input
                  outlined
                  v-model="email"
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
                  autocomplete="on"
                  v-model="password"
                  :label="`${$t('label_password')} *`"
                  type="password"
                  lazy-rules
                  reactive-rules
                  :hint="
                    password.length > 5
                      ? ''
                      : $t('min_characters', { number: 6 })
                  "
                  :rules="[
                    (val) => (val && val.length > 0) || $t('type_something'),
                    (val) =>
                      (val && val.length > 5) ||
                      $t('min_characters', { number: 6 }),
                  ]"
                  color="secondary"
                />

                <div class="section_form__actions">
                  <DiaryButton
                    :label="$t('entry')"
                    type="submit"
                    color="secondary"
                    class="btn-login"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card>

          <button @click="changeLanguage">cambiar a inglés</button>
        </section>
        <section class="section-create__account">
          <p>
            {{ $t("answer_register")
            }}<a href="/create-account"> {{ $t("create_account") }} </a>
          </p>
        </section>
      </article>
    </main>
  </div>
</template>

<style scoped>
.login-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--q-secondary);
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
}
.section-container-form {
  width: 100%;
}
.section-container-form__form {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-sm);
  gap: 20px;
}
.section_form__actions {
  width: 100%;
  display: flex;
  justify-content: center;
}
.section-create__account {
  font-size: 1.1em;
}
.btn-login {
  width: 100%;
  height: 56px;
}
.logo-app {
  height: 140px;
  max-width: 150px;
}

@media (min-width: 991px) {
  .logo-app {
    height: 240px;
    max-width: 250px;
  }
  .login-header {
    width: 50%;
    height: 100%;
  }
  .login {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .page-my-diary-food {
    width: 50%;
    display: flex;
    align-items: center;
  }
}
</style>
