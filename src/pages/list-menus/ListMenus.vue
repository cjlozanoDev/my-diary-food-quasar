<script setup>
import { computed, ref, watch } from "vue";
import { useMenusStore } from "src/store/useMenusStore";
import { useStatePageStore } from "src/store/useStatePageStore";
import {
  formatDateFromMillisToDateLuxon,
  formatJSDateToLuxon,
  formatDateLuxonStartOf,
  getDateToday,
  getDateBeginningOfTime,
} from "src/utils/datesUtils";

import FiltersMenus from "components/filter-menus/FiltersMenus.vue";
import FiltersMenusSmartphone from "components/filter-menus/FiltersMenusSmartphone.vue";
import SkeletonCardListMenu from "components/skeletons/SkeletonCardListMenu.vue";
import CardListMenu from "./components/CardListMenu.vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();

const $q = useQuasar();

const isMobile = computed(() => $q.platform.is.mobile);

const menusStore = useMenusStore();
const statePageStore = useStatePageStore();

const filtersValues = ref({
  name: "",
  description: "",
  dateRanges: {
    start: null,
    end: null,
  },
});

const currentPage = ref(1);
const numCardsByPages = 10;
const componentKey = ref(0);
const loadingUpdateMenus = ref(false);

const menusComputed = computed(() => {
  return [...menusStore.menus].sort((a, b) => {
    const fechaA = formatDateFromMillisToDateLuxon(a.created_at);
    const fechaB = formatDateFromMillisToDateLuxon(b.created_at);
    return fechaB - fechaA;
  });
});

const paginatedMenus = computed(() => {
  const numEnd = currentPage.value * numCardsByPages;
  const numStart = numEnd - numCardsByPages;

  return filteredMenus.value.slice(numStart, numEnd);
});

const totalPages = computed(() => {
  return Math.ceil(menusComputed.value.length / numCardsByPages);
});

const forceRenderedComponentCard = () => {
  componentKey.value += 1;
};

const filteredMenus = computed(() =>
  menusComputed.value
    .filter((menu) => filterByName(menu))
    .filter((menu) => filterByDescription(menu))
    .filter((menu) => filterByDatesRange(menu))
);

const filterByName = (menu) => {
  return menu.name.includes(filtersValues.value.name);
};

const filterByDescription = (menu) => {
  if (!menu.description && filtersValues.value.description === "") return true;
  return (
    menu.description &&
    menu.description.includes(filtersValues.value.description)
  );
};

const filterByDatesRange = (menu) => {
  if (
    !filtersValues.value.dateRanges.start &&
    !filtersValues.value.dateRanges.end
  )
    return true;

  const dateCreatedAt = formatDateLuxonStartOf(
    formatDateFromMillisToDateLuxon(menu.created_at)
  );

  const dateLuxonStart = filtersValues.value.dateRanges.start
    ? formatDateLuxonStartOf(
        formatJSDateToLuxon(filtersValues.value.dateRanges.start)
      )
    : getDateBeginningOfTime();

  const dateLuxonEnd = filtersValues.value.dateRanges.end
    ? formatDateLuxonStartOf(
        formatJSDateToLuxon(filtersValues.value.dateRanges.end)
      )
    : getDateToday();

  return dateCreatedAt >= dateLuxonStart && dateCreatedAt <= dateLuxonEnd;
};

const updateFilterValuesMenus = (name, description, dateRanges) => {
  loadingUpdateMenus.value = true;

  setTimeout(() => {
    filtersValues.value.name = name;
    filtersValues.value.description = description;
    filtersValues.value.dateRanges.start = dateRanges.start;
    filtersValues.value.dateRanges.end = dateRanges.end;
    loadingUpdateMenus.value = false;
  }, "200");
};

const viewMenu = (idMenu) => {
  menusStore.setIdMenuSelected(idMenu);
  router.push({ name: "ViewMenu" });
};

watch(currentPage, () => {
  forceRenderedComponentCard();
});
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">Tus menús </span>

    <section class="page-my-diary-food">
      <section class="list-menus__filters">
        <FiltersMenus
          v-if="!isMobile"
          @filter-menus="updateFilterValuesMenus"
        />
        <span v-else class="list-menus__component-filters-menus-smartphone">
          <FiltersMenusSmartphone @filter-menus="updateFilterValuesMenus" />
        </span>
      </section>
      <SkeletonCardListMenu
        custom-class="section_skeleton"
        v-if="statePageStore.loadingMenus || loadingUpdateMenus"
        :number-repeat="4"
      />
      <section class="section-list-menus__card-list__card" v-else>
        <transition name="fade" mode="out-in">
          <div
            v-if="!statePageStore.loadingMenus"
            :key="componentKey"
            class="list-menus__card-list__card"
          >
            <CardListMenu
              v-for="menu in paginatedMenus"
              @view-menu="viewMenu"
              :key="menu.id"
              :menu="menu"
            />
          </div>
        </transition>
      </section>

      <q-pagination
        class="tool-pagination"
        v-model="currentPage"
        :max="totalPages"
        :max-pages="6"
        direction-links
        push
        color="primaryLigth"
        active-design="push"
        active-color="primary"
      />
    </section>
  </div>
</template>

<style scoped>
.section_skeleton,
.section-list-menus__card-list__card {
  max-width: 1200px;
}
.section-list-menus__card-list__card {
  width: 100%;
}
.list-menus__card-list__card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.list-menus__filters {
  width: 100%;
  max-width: 1200px;
}
.tool-pagination {
  margin-top: 10px;
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.list-menus__component-filters-menus-smartphone {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

:deep(.bg-primaryLigth) {
  background: var(--q-primary-ligth) !important;
}
</style>
