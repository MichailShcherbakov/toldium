import { createApp, h, provide } from "vue";
import { createPinia } from "pinia";
import { apolloClient } from "./apolloClient";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  },
});

app.use(createPinia());
app.use(router);

app.mount("#app");
