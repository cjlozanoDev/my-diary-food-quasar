<script setup>
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DatesRange from "../DatesRange.vue";
import { getDateToday, getCurrentDateMinusDays } from "src/utils/datesUtils";
import { ref } from "vue";

const emit = defineEmits(["filter-menus"]);

const nameMenu = ref("");
const descriptionMenu = ref("");

const datesRangeObject = ref({
  start: null,
  end: null,
});

const updateRangeDate = (range) => {
  datesRangeObject.value = range;
};

const filterMenus = () => {
  emit(
    "filter-menus",
    nameMenu.value,
    descriptionMenu.value,
    datesRangeObject.value
  );
};
</script>

<template>
  <div class="filters-menus">
    <DiaryInput
      v-model="nameMenu"
      class="filter-menus__input"
      bg-color="white"
      type="text"
      :label="`${$t('label_name')}`"
    />
    <DiaryInput
      v-model="descriptionMenu"
      class="filter-menus__input"
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
      :onclick="filterMenus"
    />
  </div>
</template>

<style scoped>
.filters-menus {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10px;
  background-color: mistyrose;
  padding: 10px;
  border-radius: 20px;
}
.filter-menus__input {
  width: 156px;
}
.filters-menus__button-search {
  height: 45px;
  margin-top: 5px;
}
</style>
