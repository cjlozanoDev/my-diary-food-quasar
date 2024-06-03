<script setup>
import { ref, computed } from "vue";
import { formatDateFromJSDate } from "src/utils/datesUtils";
import DialogDateVCalendar from "./components/DialogDateVCalendar.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryFoodIcon from "src/components/diary-food-icon/DiaryFoodIcon.vue";

const emit = defineEmits(["update-date-range"]);

const props = defineProps({
  datesRangeObject: {
    type: Object,
    default: () => ({
      start: "",
      end: "",
    }),
  },
});

const dialogDateVisible = ref(false);

const dateSelectedName = ref("since");

const dateSelectedCalendar = computed(() =>
  dateSelectedName.value === "since"
    ? props.datesRangeObject.start
    : props.datesRangeObject.end
);

const openDialog = (dateSelectedNameInput) => {
  dateSelectedName.value = dateSelectedNameInput;

  dialogDateVisible.value = true;
};

const closeDialog = (dateSelected) => {
  dialogDateVisible.value = false;
  const newRangeDate = {
    ...props.datesRangeObject,
  };
  if (dateSelectedName.value === "since") {
    newRangeDate.start = dateSelected;
  }
  if (dateSelectedName.value === "until") {
    newRangeDate.end = dateSelected;
  }
  emit("update-date-range", newRangeDate);
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

    <DialogDateVCalendar
      :dialog-date-visible="dialogDateVisible"
      :date-selected-calendar="dateSelectedCalendar"
      :date-selected-name="dateSelectedName"
      @close-dialog="closeDialog"
    />
  </div>
</template>
