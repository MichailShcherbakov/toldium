import { createRouter, createWebHistory } from "vue-router";
import HomePage from "~/pages/HomePage.vue";
import SignInPage from "~/pages/SignInPage.vue";
import SignUpPage from "~/pages/SignUpPage.vue";
import ChannelPage from "~/pages/ChannelPage.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/channels/@me",
    },
    {
      path: "/channels/@me",
      name: "home",
      component: HomePage,
    },
    {
      path: "/channels/@me/:id",
      name: "home-channel",
      component: HomePage,
    },
    {
      path: "/channels/:id",
      name: "channel",
      component: ChannelPage,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInPage,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpPage,
    },
  ],
});
