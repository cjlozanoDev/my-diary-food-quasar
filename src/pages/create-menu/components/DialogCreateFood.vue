<script setup>
import { computed, ref } from "vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";

const emit = defineEmits(["close-dialog", "save-food"]);

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  dayWeek: {
    type: String,
    default: "",
  },
  nameMomentFood: {
    type: String,
    default: "",
  },
});

const descriptionFood = ref("");

const value = computed({
  get() {
    return props.dialogVisible;
  },
});

const closeDialog = () => {
  emit("close-dialog");
};

const saveFood = () => {
  emit("save-food");
};
</script>

<template>
  <q-dialog v-model="value" persistent>
    <q-card class="dialog-create-food">
      <q-card-section class="dialog-create-food__card__section-head">
        <div>
          <div class="text-h6">{{ dayWeek }}</div>
          <span class="text-name-moment-food"> {{ nameMomentFood }}</span>
        </div>
        <q-avatar square>
          <img src="src/assets/tablePencil.png" />
        </q-avatar>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <DiaryInput
          class="text-area"
          v-model="descriptionFood"
          filled
          type="textarea"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <DiaryButton
          flat
          label="cancel"
          color="secondary"
          :onclick="closeDialog"
        />
        <DiaryButton label="Aceptar" color="secondary" :onclick="saveFood" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.dialog-create-food {
  width: 350px;
}
.dialog-create-food__card__section-head {
  display: flex;
  justify-content: space-between;
}
.text-name-moment-food {
  font-style: italic;
}
@media (min-width: 768px) {
  .dialog-create-food {
    width: 450px;
  }
}
@media (min-width: 992px) {
  .dialog-create-food {
    width: 650px;
  }
}
</style>
