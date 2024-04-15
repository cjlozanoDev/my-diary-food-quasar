<script setup>
import { computed } from "vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";

const emit = defineEmits("update-range-date");

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

<style scoped>
.rango-fechas__contenedor-fechas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.input-text-fecha {
  background-color: white;
  height: 56px;
}

.rango-fechas__contenedor-fechas__icon {
  margin-top: 24px;
}

.rango-fechas__contenedor-fechas__icon.sin-label {
  margin-top: 0px;
}

.rango_fechas__options {
  margin-top: 10px;
}
</style>

<template>
  <div>
    <DatePicker v-model.range="datesRangeComp" color="pink">
      <template #default="{ inputValue, inputEvents }">
        <div class="rango-fechas__contenedor-fechas">
          <div>
            <label for="fecha-desde">
              {{ labelDateFrom }}
            </label>
            <input
              name="fecha-desde"
              class="input-text-fecha"
              :value="inputValue.start"
              v-on="inputEvents.start"
              placeholder="Fecha desde"
              solo
            />
          </div>

          <span :class="['rango-fechas__contenedor-fechas__icon']"> -> </span>

          <div>
            <label for="fecha-hasta">
              {{ labelDateUntil }}
            </label>
            <input
              name="fecha-hasta"
              class="input-text-fecha"
              :value="inputValue.end"
              v-on="inputEvents.end"
              placeholder="Fecha hasta"
              solo
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
</style>
