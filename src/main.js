import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false, // explicitly use light mode
    },
  },
});
app.mount("#app");
