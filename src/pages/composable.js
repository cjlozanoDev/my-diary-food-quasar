import { ref } from "vue";

export const useComposable = () => {
  const prueba = ref("hola");
  return {
    prueba,
  };
};
