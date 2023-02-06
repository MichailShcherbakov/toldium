import { createHttpLink, fromPromise } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { useAuth } from "~/stores/auth/useAuth";
import { getAccessToken } from "./utils";

export const authLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "include",
});

export const mainLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "include",
});

export const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (!graphQLErrors) return;

  for (const err of graphQLErrors) {
    if (err.extensions.code !== "UNAUTHENTICATED") continue;

    const ctx = operation.getContext();
    const { headers } = ctx;

    return fromPromise(getAccessToken()).flatMap(({ accessToken }) => {
      operation.setContext({
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      });

      return forward(operation);
    });
  }
});

export const accessLink = setContext(async (_, ctx) => {
  const { headers } = ctx;

  const auth = useAuth();

  const { accessToken } = auth;

  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});
