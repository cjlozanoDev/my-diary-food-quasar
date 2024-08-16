<script setup>
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DatesRange from "../DatesRange.vue";
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

const clearFilters = () => {
  datesRangeObject.value = {
    start: null,
    end: null,
  };
  nameMenu.value = "";
  descriptionMenu.value = "";
};
</script>

<template>
  <div class="filters-menus">
    <DiaryInput
      v-model="nameMenu"
      class="filter-menus__input"
      dense
      bg-color="white"
      type="text"
      :label="`${$t('label_name')}`"
    />
    <DiaryInput
      v-model="descriptionMenu"
      class="filter-menus__input"
      dense
      bg-color="white"
      type="text"
      :label="`${$t('label_description')}`"
    />
    <DatesRange
      :dates-range-object="datesRangeObject"
      @update-range-date="updateRangeDate"
      dense
    />

    <DiaryButton
      class="filters-menus__button-search"
      :label="`${$t('search')}`"
      :onclick="filterMenus"
    />
    <DiaryButton
      outline
      class="filters-menus__button-search"
      :label="`${$t('clear')}`"
      :onclick="clearFilters"
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
  background-color: #f9cad0;
  padding: 10px;
  border-radius: 20px;
}
.filter-menus__input {
  width: 156px;
}
.filters-menus__button-search {
  height: 40px;
}
</style>
