<script setup>
import { computed } from "vue";
import { DatePicker } from "v-calendar";
import DiaryButton from "src/components/diary-food-icon/DiaryFoodIcon.vue";
import DiaryInput from "src/components/Input/DiaryInput.vue";
import "v-calendar/style.css";

const emit = defineEmits(["update-range-date"]);

const props = defineProps({
  datesRangeObject: {
    type: Object,
    required: true,
    default: () => ({
      start: "",
      end: "",
    }),
  },
  labelDateFrom: {
    type: String,
    default: "Fecha desde",
  },
  labelDateUntil: {
    type: String,
    default: "Fecha Hasta",
  },
});

const datesRangeComp = computed({
  get() {
    return props.datesRangeObject;
  },
  set(value) {
    if (!value) {
      emit("update-range-date", {
        start: "",
        end: "",
      });
    } else {
      emit("update-range-date", value);
    }
  },
});
</script>

<template>
  <div>
    <DatePicker v-model.range="datesRangeComp" color="pink">
      <template #default="{ inputValue, inputEvents }">
        <div class="dates-range__container-dates">
          <div>
            <DiaryInput
              label="fecha desde"
              v-model="inputValue.start"
              v-on="inputEvents.start"
              placeholder="Fecha desde"
              bg-color="white"
            />
          </div>

          <DiaryButton name="arrow_forward" />

          <div>
            <DiaryInput
              label="Fecha hasta"
              v-model="inputValue.end"
              v-on="inputEvents.end"
              placeholder="Fecha hasta"
              bg-color="white"
            />
          </div>
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<style scoped>
.vc-calendar .vc-day.on-right {
  margin-left: 0 !important;
}

.dates-range__container-dates {
  display: flex;
  align-items: baseline;
}

.input-text-fecha {
  background-color: white;
  height: 56px;
}

.dates-range__container-dates__icon {
  margin-top: 24px;
}

.dates-range__container-dates__icon.sin-label {
  margin-top: 0px;
}

.rango_fechas__options {
  margin-top: 10px;
}
</style>
