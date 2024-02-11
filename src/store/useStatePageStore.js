import { defineStore } from "pinia";

export const useStatePageStore = defineStore("statePage", {
  state: () => ({
    loading: false,
    loadingMenus: true,
    message: "Cargando",
  }),
  actions: {
    setLoading(isLoading, message) {
      this.loading = isLoading;
      this.message = message;
    },
    setLoadingMenus(isLoading) {
      this.loadingMenus = isLoading;
    },
  },
});
