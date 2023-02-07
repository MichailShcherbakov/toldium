import { ApolloClient } from "@apollo/client/core";
import { splitLink } from "../links";
import { cache } from "./cache";

export const MainApolloClient = new ApolloClient({
  link: splitLink,
  cache,
});
