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
                @submit="onSubmit"
                @reset="onReset"
                class="section-container-form__form"
              >
                <q-input
                  outlined
                  v-model="text"
                  :label="$t('label_email')"
                  color="secondary"
                />
                <q-input
                  outlined
                  v-model="text"
                  :label="$t('label_password')"
                  type="password"
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

          <button @click="changeLanguage">cambiar a inglés</button>
        </section>
        <section class="section-create__account">
          <p>¿No estás registrado/a? <a href="">Crear cuenta </a></p>
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
