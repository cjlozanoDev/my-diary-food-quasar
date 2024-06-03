<script setup>
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DatesRangeSmartphone from "../dates-range-smartphone/DatesRangeSmartphone.vue";
import { formatJSDateToLuxon } from "src/utils/datesUtils";
import { ref } from "vue";

const emit = defineEmits(["filter-menus"]);

const nameMenu = ref("");
const descriptionMenu = ref("");
const textError = ref(null);

const datesRangeObject = ref({
  start: null,
  end: null,
});

const dialog = ref(false);
const position = "bottom";

const updateDateRange = (range) => {
  datesRangeObject.value = range;
};
const filterMenus = () => {
  const isFormValid = validateForm();

  if (isFormValid) {
    dialog.value = false;
    emit(
      "filter-menus",
      nameMenu.value,
      descriptionMenu.value,
      datesRangeObject.value
    );
  }
};
const validateForm = () => {
  if (datesRangeObject.value.start && datesRangeObject.value.end) {
    const dateLuxonStart = formatJSDateToLuxon(datesRangeObject.value.start);
    const dateLuxonEnd = formatJSDateToLuxon(datesRangeObject.value.end);

    if (dateLuxonStart > dateLuxonEnd) {
      textError.value =
        "La fecha final no puede ser anterior a la fecha inicial ";
      return false;
    }
  }
  textError.value = null;
  return true;
};
const open = () => {
  dialog.value = true;
};
</script>

<template>
  <DiaryButton
    label="Mostrar filtros"
    flat
    icon="filter_alt"
    color="primary"
    :onclick="open"
  />
  <q-dialog v-model="dialog" :position="position">
    <q-card>
      <q-card-section class="row items-center no-wrap">
        <span class="filters-menus-smartphone__title-filters"> Filtros </span>
      </q-card-section>
      <q-card-section>
        <DiaryInput
          v-model="nameMenu"
          dense
          class="filter-menus__input"
          bg-color="white"
          type="text"
          :label="`${$t('label_name')}`"
        />
        <DiaryInput
          v-model="descriptionMenu"
          dense
          class="filter-menus__input"
          bg-color="white"
          type="text"
          :label="`${$t('label_description')}`"
        />
        <DatesRangeSmartphone
          :dates-range-object="datesRangeObject"
          @update-date-range="updateDateRange"
        />
        <p v-if="textError" class="text-error">* {{ textError }}</p>

        <q-separator />
        <DiaryButton
          class="filters-menus__button-search"
          :label="`${$t('search')}`"
          :onclick="filterMenus"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.filters-menus-smartphone__title-filters {
  font-weight: bold;
  font-size: var(--font-medium-large);
}
</style>
