<script setup>
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
    default: undefined,
  },
  lazyRules: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
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
        "textarea",
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
    :placeholder="placeholder"
    :reactive-rules="reactiveRules"
    :rules="rules"
    :color="color"
  />
</template>
