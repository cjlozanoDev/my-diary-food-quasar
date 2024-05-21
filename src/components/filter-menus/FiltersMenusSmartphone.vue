<script setup>
import DiaryInput from "src/components/Input/DiaryInput.vue";
import DiaryButton from "src/components/Button/DiaryButton.vue";
import DatesRangeSmartphone from "../dates-range-smartphone/DatesRangeSmartphone.vue";
import { ref } from "vue";

const nameMenu = ref("");
const descriptionMenu = ref("");

const datesRangeObject = ref({
  start: null,
  end: null,
});

const dialog = ref(false);
const position = "bottom";

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
const open = () => {
  dialog.value = true;
};
const date = ref("2019/02/01");
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
        <DatesRangeSmartphone />
        <q-separator />
        <DiaryButton
          class="filters-menus__button-search"
          :label="`${$t('search')}`"
          :onclick="filterMenus"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
  <!-- <DiaryButton color="primary" label="Mostrar filtros" flat icon="filter_alt">
    <q-menu transition-show="scale" transition-hide="scale" persistent>
      <q-list style="min-width: 100px">
        <q-item>
          <q-item-section>
            <DiaryInput
              v-model="nameMenu"
              dense
              class="filter-menus__input"
              bg-color="white"
              type="text"
              :label="`${$t('label_name')}`"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <DiaryInput
              v-model="descriptionMenu"
              dense
              class="filter-menus__input"
              bg-color="white"
              type="text"
              :label="`${$t('label_description')}`"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <DatesRange
              :dates-range-object="datesRangeObject"
              @update-range-date="updateRangeDate"
              dense
            />
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>
            <DiaryButton
              class="filters-menus__button-search"
              :label="`${$t('search')}`"
              :onclick="filterMenus"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </DiaryButton> -->
</template>

<style scoped>
.filters-menus-smartphone__title-filters {
  font-weight: bold;
  font-size: var(--font-medium-large);
}
</style>
