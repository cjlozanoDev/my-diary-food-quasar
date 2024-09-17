<script setup>
import DiaryButton from "src/components/Button/DiaryButton.vue";
import { formatDateFromMillis } from "src/utils/datesUtils";

const emit = defineEmits(["view-menu"]);

const props = defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});

const viewMenu = () => {
  emit("view-menu", props.menu.id);
};
</script>

<template>
  <section class="card-list-menu" v-if="Object.keys(menu)">
    <div class="card_list_menu__info">
      <span class="card_list_menu__info__title"> {{ menu.name }} </span>
      <span class="card_list_menu__info__description">
        {{
          menu.description ||
          "Este ménu no tiene descripción, puedes añadirla pulsando el botón de ver menú."
        }}
      </span>
      <span class="">
        <DiaryButton
          class="card_list_menu__info__section-enter"
          color="#ff0000"
          size="sm"
          icon-right="arrow_forward"
          label="Ver menú"
          :onclick="viewMenu"
        />
      </span>
    </div>

    <section class="card_list_menu__section_icon">
      <img
        src="/assets/foodIconCardListMenu.svg"
        alt="Icon image dish and fork"
        class="card_list_menu__icon"
      />
      {{ formatDateFromMillis(menu.created_at) }}
    </section>
  </section>
</template>

<style scoped>
.card-list-menu {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--q-primary-extra-ligth);
  border-radius: 20px;
  height: 150px;
  width: 100%;
  position: relative;
}
.card_list_menu__info {
  display: flex;
  flex-direction: column;
}
.card_list_menu__info__description {
  font-style: italic;
}
.card_list_menu__info__section-enter {
  margin: 10px 0px;
  background-color: var(--q-primary-ligth);
  font-size: 20px;
}
.card_list_menu__info__title {
  font-weight: bold;
  font-size: var(--font-medium-large);
}
.card_list_menu__section_icon {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.card_list_menu__icon {
  width: 60px;
  transform: rotate(-9deg);
}
</style>
