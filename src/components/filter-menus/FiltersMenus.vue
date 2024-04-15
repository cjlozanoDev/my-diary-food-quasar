<script setup>
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DatesRange from "../DatesRange.vue";
import { getDateToday, getCurrentDateMinusDays } from "src/utils/datesUtils";
import { ref } from "vue";

const datesRangeObject = ref({
  start: getDateToday(),
  end: getCurrentDateMinusDays(30),
});

const updateRangeDate = (range) => {
  console.log("la fecha es", datesRangeObject.value);
  datesRangeObject.value = range;
};
</script>

<template>
  <div class="filters-menus">
    <DiaryInput bg-color="white" type="text" :label="`${$t('label_name')}`" />
    <DiaryInput
      bg-color="white"
      type="text"
      :label="`${$t('label_description')}`"
    />
    <DatesRange
      :dates-range-object="datesRangeObject"
      @update-range-date="updateRangeDate"
    />

    <DiaryButton
      class="filters-menus__button-search"
      :label="`${$t('search')}`"
    />
  </div>
</template>

<style scoped>
.filters-menus {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}
.filters-menus__button-search {
  height: 56px;
}
</style>
