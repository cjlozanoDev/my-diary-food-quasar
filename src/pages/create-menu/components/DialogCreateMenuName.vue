<script setup>
import { ref, computed, watch } from "vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";

const emit = defineEmits(["close-dialog", "create-menu"]);

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const numNameMaxCharacters = 80;
const numDescriptionMaxCharacters = 120;
const nameMenu = ref("");
const descriptionMenu = ref("");

const value = computed({
  get() {
    return props.dialogVisible;
  },
});

const closeDialog = () => {
  emit("close-dialog");
};

const createMenu = () => {
  emit("create-menu", nameMenu.value, descriptionMenu.value);
};
</script>

<template>
  <q-dialog v-model="value" persistent>
    <q-card class="dialog-create-menu-name">
      <q-card-section class="dialog-create-menu-name__card__section-head">
        <span class="dialog-create-menu-name__card__section-head__text">
          Escribe un nombre para tu menú.</span
        >
        <q-avatar square>
          <img src="/assets/dishNameMenu.png" />
        </q-avatar>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit.prevent="createMenu" class="q-gutter-md">
          <DiaryInput
            class="text-area"
            v-model="nameMenu"
            :counter="true"
            type="text"
            placeholder="Sin nombre"
            :hint="`${
              nameMenu.length > numNameMaxCharacters
                ? ''
                : $t('max_characters', { number: numNameMaxCharacters })
            }`"
            :rules="[
              (val) => (val && val.length > 0) || $t('type_something'),
              (val) =>
                (val && val.length < numNameMaxCharacters) ||
                $t('max_characters', { number: numNameMaxCharacters }),
            ]"
          />
          <DiaryInput
            v-model="descriptionMenu"
            type="textarea"
            placeholder="Sin descripción"
            :counter="true"
            :hint="`${
              nameMenu.length > numDescriptionMaxCharacters
                ? ''
                : $t('max_characters', { number: numDescriptionMaxCharacters })
            }`"
            :rules="[
              (val) =>
                val.length < numDescriptionMaxCharacters ||
                $t('max_characters', { number: numDescriptionMaxCharacters }),
            ]"
          />
          <div class="q-form__actions">
            <DiaryButton
              flat
              label="cancel"
              color="primary"
              :onclick="closeDialog"
            />
            <DiaryButton label="Aceptar" color="primary" type="submit" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.dialog-create-menu-name {
  width: 350px;
}
.dialog-create-menu-name__card__section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-name-moment-food {
  font-style: italic;
}
.q-form__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}
@media (min-width: 768px) {
  .dialog-create-menu-name {
    width: 450px;
  }
  .dialog-create-menu-name__card__section-head__text {
    font-size: var(--font-large);
  }
}
@media (min-width: 992px) {
  .dialog-create-menu-name {
    width: 650px;
  }
}
</style>
