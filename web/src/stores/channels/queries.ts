import gql from "graphql-tag";

export const GET_CHANNELS = gql`
  query GetChannels {
    getChannels {
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
