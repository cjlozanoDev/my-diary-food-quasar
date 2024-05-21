<script setup>
import { ref, computed, h, watch } from "vue";
import { DatePicker } from "v-calendar";

const emit = defineEmits(["close-dialog"]);

const props = defineProps({
  dialogDateVisible: {
    type: Boolean,
    default: false,
  },
  dateSelectedCalendar: {
    type: Object,
    default: null,
  },
});

const value = computed({
  get() {
    return props.dialogDateVisible;
  },
});

const dateSelected = computed({
  get() {
    return props.dateSelectedCalendar;
  },
  set(newValue) {
    emit("close-dialog", newValue);
  },
});
</script>

<template>
  <q-dialog v-model="value" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Fecha desde</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <DatePicker v-model="dateSelected" mode="date" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
