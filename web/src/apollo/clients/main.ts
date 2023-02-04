import { ApolloClient, from } from "@apollo/client/core";
import { accessLink, errorLink, mainLink } from "../links";
import { cache } from "./cache";

export const MainApolloClient = new ApolloClient({
  link: from([accessLink, errorLink, mainLink]),
  cache,
});
