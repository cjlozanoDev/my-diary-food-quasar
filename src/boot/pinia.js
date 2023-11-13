import { boot } from "quasar/wrappers";
import { createPinia } from "pinia";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app } /* { app, router, ... } */) => {
  const pinia = createPinia();

  app.use(pinia);
  // something to do
});
