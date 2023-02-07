import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const accessToken = ref("");

  function setAccessToken(token: string) {
    console.log("[authTokens]:", "set new token: ", token);

    accessToken.value = token;
  }

  return { accessToken, setAccessToken };
});
