import gql from "graphql-tag";

export const GET_CHANNEL_MESSAGES_BY_CHANNEL_ID = gql`
  query GetMessagesByChannelId($channelId: UUID!) {
    getMessagesByChannelId(channelId: $channelId) {
      id
      content
      updatedAt
      createdAt
      member {
        id
        user {
          id
          name
          avatarURL
        }
      }
    }
  }
`;
