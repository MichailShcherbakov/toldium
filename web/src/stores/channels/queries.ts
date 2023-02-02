import gql from "graphql-tag";

export const GET_CHANNELS_BY_USER_ID = gql`
  query GetChannelsByUserId($userId: String!) {
    getChannelsByUserId(userId: $userId) {
      id
      kind
      createdAt
      desc
      memberLimit
      name
      unread
      updatedAt
      avatarURL
      lastMessage {
        id
        content
        createdAt
        member {
          user {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_CHANNEL_BY_ID = gql`
  query GetChannelById($channelId: String!) {
    getChannelById(channelId: $channelId) {
      id
      name
      desc
      avatarURL
      kind
      memberLimit
      unread
      updatedAt
      createdAt
    }
  }
`;
