<script setup>
import { computed, ref, watch } from "vue";
import { useMenusStore } from "src/store/useMenusStore";
import { useStatePageStore } from "src/store/useStatePageStore";
import { formatDateFromMillisToDateLuxon } from "src/utils/datesUtils";
import SkeletonCardListMenu from "components/skeletons/SkeletonCardListMenu.vue";
import CardListMenu from "./components/CardListMenu.vue";

const menusStore = useMenusStore();
const statePageStore = useStatePageStore();

const currentPage = ref(1);
const numCardsByPages = 10;
const componentKey = ref(0);

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

  return menusComputed.value.slice(numStart, numEnd);
});

const totalPages = computed(() => {
  return Math.ceil(menusComputed.value.length / numCardsByPages);
});

const forceRenderedComponentCard = () => {
  componentKey.value += 1;
};

watch(currentPage, () => {
  forceRenderedComponentCard();
});
</script>

<template>
  <div>
    <span class="head-diary-food head-subtitle">Tus menús</span>

    <section class="page-my-diary-food">
      <SkeletonCardListMenu
        custom-class="section_skeleton"
        v-if="statePageStore.loadingMenus"
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
        color="primary"
        active-design="push"
        active-color="orange"
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
</style>
