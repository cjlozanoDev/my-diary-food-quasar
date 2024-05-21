<script setup>
import { ref, computed } from "vue";
import { formatDateFromJSDate } from "src/utils/datesUtils";
import DialogDateVCalendar from "./components/DialogDateVCalendar.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryFoodIcon from "src/components/diary-food-icon/DiaryFoodIcon.vue";

const dialogDateVisible = ref(false);
const datesRangeObject = ref({
  start: null,
  end: null,
});

const dateSelectedName = ref("since");
const dateSelectedCalendar = computed(() =>
  dateSelectedName.value === "since"
    ? datesRangeObject.value.start
    : datesRangeObject.value.end
);

const openDialog = (dateSelectedNameInput) => {
  dateSelectedName.value = dateSelectedNameInput;

  dialogDateVisible.value = true;
};

const closeDialog = (dateSelected) => {
  if (dateSelectedName.value === "since") {
    datesRangeObject.value.start = dateSelected;
  }
  if (dateSelectedName.value === "until") {
    datesRangeObject.value.end = dateSelected;
  }
  dialogDateVisible.value = false;
};
// since -> desde
// hasta -> until
</script>

<template>
  <div>
    <DiaryInput
      readonly
      dense
      label="Desde"
      :model-value="formatDateFromJSDate(datesRangeObject.start)"
      @click="openDialog('since')"
    >
      <template v-slot:prepend>
        <DiaryFoodIcon name="calendar_month" />
      </template>
    </DiaryInput>
    <DiaryInput
      readonly
      dense
      label="Hasta"
      :model-value="formatDateFromJSDate(datesRangeObject.end)"
      @click="openDialog('until')"
    >
      <template v-slot:prepend>
        <DiaryFoodIcon name="calendar_month" />
      </template>
    </DiaryInput>
    <button @click="openDialog">Abrir</button>

    <DialogDateVCalendar
      :dialog-date-visible="dialogDateVisible"
      :date-selected-calendar="dateSelectedCalendar"
      @close-dialog="closeDialog"
    />
  </div>
</template>
