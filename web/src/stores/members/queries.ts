import gql from "graphql-tag";

export const GET_CHANNEL_MEMBERS_BY_CHANNEL_ID = gql`
  query GetMembersByChannelId($channelId: UUID!) {
    getMembersByChannelId(channelId: $channelId) {
      id
      createdAt
      updatedAt
      channelId
      user {
        name
        id
        email
        avatarURL
        createdAt
        updatedAt
      }
      userId
    }
  }
`;
