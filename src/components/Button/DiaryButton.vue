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
  flat: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
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
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
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
    :color="color"
    :dense="dense"
    :flat="flat"
    :icon="icon"
    :label="label"
    :onclick="onclick"
    :outline="outline"
    :round="round"
    :size="size"
    :type="type"
  />
</template>
