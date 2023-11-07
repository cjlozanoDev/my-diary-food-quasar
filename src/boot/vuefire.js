import { boot } from "quasar/wrappers";
import { VueFire, VueFireAuth } from "vuefire";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app } /* { app, router, ... } */) => {
  app.use(VueFire, {
    firebaseApp,
    modules: [
      // ... other modules
      VueFireAuth(),
    ],
  });
  // something to do
});
