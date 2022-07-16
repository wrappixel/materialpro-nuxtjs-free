import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const Lighttheme: ThemeDefinition = {
  dark: false,
  variables: {},
  colors: {
    primary: "#1e88e5",
    info: "#03c9d7",
    success: "#05b187",
    accent: "#fc4b6c",
    warning: "#fec90f",
    error: "#fc4b6c",
    secondary: "#0cb9c5",
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: Lighttheme,
        variables: {},
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
