import { defineStore } from "pinia";

export const useStatePageStore = defineStore("statePage", {
  state: () => ({
    loading: false,
    message: "Cargando",
  }),
  actions: {
    setLoading(isLoading, message) {
      this.loading = isLoading;
      this.message = message;
    },
  },
});
