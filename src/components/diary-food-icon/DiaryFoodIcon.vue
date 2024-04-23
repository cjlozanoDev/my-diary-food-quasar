<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "sm",
    validator(value) {
      return ["xs", "sm", "md", "lg", "xl"].includes(value);
    },
  },
});
</script>

<template>
  <q-icon :size="size" :name="name" />
</template>
