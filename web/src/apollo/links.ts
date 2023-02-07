import { createHttpLink, from, fromPromise, split } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { useAuth } from "~/stores/auth/useAuth";
import { getAccessToken } from "./utils";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

export const authLink = createHttpLink({
  uri: import.meta.env.VITE_API_HTTP_URL,
  credentials: "include",
});

export const mainLink = createHttpLink({
  uri: import.meta.env.VITE_API_HTTP_URL,
  credentials: "include",
});

export const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (!graphQLErrors) return;

  for (const err of graphQLErrors) {
    if (err.extensions?.code !== "UNAUTHENTICATED") continue;

    const ctx = operation.getContext();
    const { headers } = ctx;

    return fromPromise(getAccessToken()).flatMap(({ accessToken }) => {
      operation.setContext({
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
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
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

export const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_API_WS_URL,
    connectionParams: async () => {
      const accessToken = (await getAccessToken()).accessToken;

      return {
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      };
    },
  }),
);

export const splitLink = from([
  accessLink,
  errorLink,
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    mainLink,
  ),
]);
