import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  experimental:{
    inlineSSRStyles:false
  },

  ssr: true,
  routeRules: {
      '/**': { ssr: false }
  },
  
  typescript: {
    shim: false,
  },
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      title:
        "MaterialPro Nuxt 3 - Vuetify 3 - vite - Typescript Based Free Admin Dashboard Template",
    },
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
  hooks: {
    "vite:extendConfig": (config: any) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve("/assets/scss/variables.scss") },
        })
      );
    },
  },
});
