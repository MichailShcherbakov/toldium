import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useGoToHomePage = () => {
  const router = useRouter();
  const route = useRoute();

  function navigate() {
    router.push({
      name: "home",
    });
  }

  const isOnHomePage = computed(() => route.name === "home");

  return {
    navigate,
    isOnHomePage,
  };
};
