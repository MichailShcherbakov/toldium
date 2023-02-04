import { ApolloClient } from "@apollo/client/core";
import { authLink } from "../links";
import { cache } from "./cache";

export const AuthApolloClient = new ApolloClient({
  link: authLink,
  cache,
});
