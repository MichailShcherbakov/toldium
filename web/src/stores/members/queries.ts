import { gql } from "~/gql";

export const GET_CHANNEL_MEMBERS_BY_CHANNEL_ID = gql(`
  query GetMembersByChannelId($channelId: UUID!) {
    getMembersByChannelId(channelId: $channelId) {
      id
      createdAt
      updatedAt
      channelId
      userId
      user {
        name
        id
        email
        avatarURL
        createdAt
        updatedAt
      }
    }
  }
`);
