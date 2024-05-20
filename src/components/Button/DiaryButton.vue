<script setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
  dense: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  onclick: {
    type: Function,
    default: () => {},
  },
  outline: {
    type: Boolean,
    default: false,
  },
  push: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
    validator(value) {
      return ["xs", "sm", "md", "lg", "xl"].includes(value);
    },
  },
  square: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
    validator(value) {
      return ["submit", "reset", "button"].includes(value);
    },
  },
});
</script>

<template>
  <q-btn
    v-if="icon"
    :color="color"
    :dense="dense"
    :disable="disable"
    :flat="flat"
    :icon="icon"
    :label="label"
    :onclick="onclick"
    :outline="outline"
    :push="push"
    :round="round"
    :size="size"
    :square="square"
    :type="type"
  >
    <slot />
  </q-btn>
  <q-btn
    v-else
    :color="color"
    :dense="dense"
    :disable="disable"
    :flat="flat"
    :label="label"
    :onclick="onclick"
    :outline="outline"
    :push="push"
    :round="round"
    :size="size"
    :square="square"
    :type="type"
  >
    <slot />
  </q-btn>
</template>
