import gql from "graphql-tag";

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: UUID!) {
    getUserById(userId: $userId) {
      id
      name
      email
      avatarURL
      createdAt
      updatedAt
    }
  }
`;
