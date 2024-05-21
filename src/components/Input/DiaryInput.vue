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
  counter: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
  hint: {
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
  mask: {
    type: String,
    default: "",
  },
  readonly: {
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
    :filled="filled"
    :dense="dense"
    :hint="hint"
    :label="label"
    :lazy-rules="lazyRules"
    :mask="mask"
    :placeholder="placeholder"
    :reactive-rules="reactiveRules"
    :readonly="readonly"
    :rules="rules"
    :color="color"
    :counter="counter"
  >
    <template v-slot:prepend>
      <slot name="prepend" />
    </template>
  </q-input>
</template>
