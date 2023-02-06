import { gql } from "~/gql";

export const GET_CHANNEL_MESSAGES_BY_CHANNEL_ID = gql(`
  query GetMessagesByChannelId($channelId: UUID!) {
    getMessagesByChannelId(channelId: $channelId) {
      id
      content
      updatedAt
      createdAt
      channelId
      memberId
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
`);

export const CREATE_MESSAGE_MUT = gql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      id
      content
      updatedAt
      createdAt
      channelId
      memberId
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
`);
