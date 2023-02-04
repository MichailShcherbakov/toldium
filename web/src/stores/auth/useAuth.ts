import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const accessToken = ref("");

  function setAccessToken(token: string) {
    accessToken.value = token;
  }

  return { accessToken, setAccessToken };
});
