<script setup>
import { ref, computed } from "vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";

const emit = defineEmits(["close-dialog", "create-menu"]);

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const nameMenu = ref("");

const value = computed({
  get() {
    return props.dialogVisible;
  },
});

const closeDialog = () => {
  emit("close-dialog");
};

const createMenu = () => {
  emit("save-food", descriptionFood.value);
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
          <img src="src/assets/dishNameMenu.png" />
        </q-avatar>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <DiaryInput
          class="text-area"
          v-model="nameMenu"
          type="text"
          placeholder="Sin nombre"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <DiaryButton
          flat
          label="cancel"
          color="secondary"
          :onclick="closeDialog"
        />
        <DiaryButton label="Aceptar" color="secondary" :onclick="createMenu" />
      </q-card-actions>
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
