import { createApp, h, provide } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { router } from "./router";
import App from "./App.vue";

import "./theme";

import "@fontsource/noto-sans";

import "~/assets/css/main.css";
import { MainApolloClient } from "./apollo/clients";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, MainApolloClient);
  },
  render() {
    return h(App);
  },
});

app.use(createPinia());
app.use(router);

app.mount("#app");
