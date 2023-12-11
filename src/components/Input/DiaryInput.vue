<script setup>
import { logoutApi } from "src/api/auth";
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  color: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  lazyRules: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  reactiveRules: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: "text",
    validator(value) {
      return [
        "text",
        "password",
        "textArea",
        "email",
        "search",
        "tel",
        "file",
        "number",
        "url",
        "time",
        "date",
        "datetime-local",
      ].includes(value);
    },
  },
});
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <q-input
    outlined
    v-model="value"
    :type="type"
    :label="label"
    :lazy-rules="lazyRules"
    :reactive-rules="reactiveRules"
    :rules="rules"
    :color="color"
  />
</template>
