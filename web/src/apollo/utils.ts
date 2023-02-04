import type { Tokens } from "~/stores/auth/type";
import { REFRESH_TOKENS_MUT } from "~/stores/auth/queries";
import { AuthApolloClient } from "./clients";
import { useAuth } from "~/stores/auth/useAuth";
import { router } from "~/router";

export async function getAccessToken(): Promise<Tokens> {
  try {
    const result = await AuthApolloClient.mutate<{ refreshTokensWeb: Tokens }>({
      mutation: REFRESH_TOKENS_MUT,
    });

    const data = result.data?.refreshTokensWeb;

    const auth = useAuth();

    if (data && data.accessToken) {
      auth.setAccessToken(data.accessToken);
    }

    return data as Tokens;
  } catch (err) {
    router.push({
      name: "sign-in",
    });

    throw err;
  }
}
