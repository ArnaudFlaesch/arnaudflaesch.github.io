import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false
        }
      }
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi
      }
    }
  });
  app.vueApp.use(vuetify);
});
