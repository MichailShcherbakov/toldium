import gql from "graphql-tag";

export const WHO_AM_I = gql`
  query WhoAmI {
    whoAmI {
      id
      name
      email
      avatarURL
      createdAt
      updatedAt
    }
  }
`;
