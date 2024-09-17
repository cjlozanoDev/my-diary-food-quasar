<script setup>
import { computed, ref } from "vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";

const emit = defineEmits(["close-dialog", "update-main-data-menu"]);

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: Boolean,
  },
  nameMenu: {
    type: String,
    default: "",
  },
  descriptionMenu: {
    type: String,
    default: "",
  },
});

const newNameMenu = ref("");
const newDescriptionMenu = ref("");
const numNameMaxCharacters = 80;
const numDescriptionMaxCharacters = 120;

const handleBeforeShowDialog = () => {
  newNameMenu.value = props.nameMenu;
  newDescriptionMenu.value = props.descriptionMenu;
};

const value = computed({
  get() {
    return props.dialogVisible;
  },
});

const closeDialog = () => {
  emit("close-dialog");
};

const updateMainDataMenu = () => {
  emit("update-main-data-menu", newNameMenu.value, newDescriptionMenu.value);
};
</script>

<template>
  <q-dialog @before-show="handleBeforeShowDialog" v-model="value" persistent>
    <q-card class="dialog-update-main-data-menu">
      <q-form @submit.prevent="updateMainDataMenu" class="q-gutter-md">
        <q-card-section
          class="dialog-update-main-data-menu__card__section-head"
        >
          <div>
            <div class="text-h6">Edición datos principales del menú</div>
          </div>
          <q-avatar square>
            <img src="/assets/tablePencil.png" />
          </q-avatar>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <DiaryInput
            v-model="newNameMenu"
            label="Nombre"
            stack-label
            filled
            :rules="[
              (val) => (val && val.length > 0) || $t('type_something'),
              (val) =>
                (val && val.length < numNameMaxCharacters) ||
                $t('max_characters', { number: numNameMaxCharacters }),
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <DiaryInput
            class="text-area"
            label="Descripción"
            stack-label
            v-model="newDescriptionMenu"
            filled
            type="textarea"
            :rules="[
              (val) =>
                val.length < numDescriptionMaxCharacters ||
                $t('max_characters', { number: numDescriptionMaxCharacters }),
            ]"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <DiaryButton
            flat
            label="cancel"
            color="primary"
            :onclick="closeDialog"
          />
          <DiaryButton label="Aceptar" color="primary" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.dialog-update-main-data-menu {
  width: 350px;
}
.dialog-update-main-data-menu__card__section-head {
  display: flex;
  justify-content: space-between;
}
.text-name-moment-food {
  font-style: italic;
}
@media (min-width: 768px) {
  .dialog-update-main-data-menu {
    width: 450px;
  }
}
@media (min-width: 992px) {
  .dialog-create-food {
    width: 650px;
  }
}
</style>
