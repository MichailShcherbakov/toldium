/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation SignIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.SignInDocument,
    "\n  mutation RefreshTokensWeb {\n    refreshTokensWeb {\n      accessToken\n      refreshToken\n    }\n  }\n": types.RefreshTokensWebDocument,
    "\n  query GetChannels {\n    getChannels {\n      id\n      kind\n      createdAt\n      desc\n      memberLimit\n      name\n      unread\n      updatedAt\n      avatarURL\n      lastMessage {\n        id\n        content\n        createdAt\n        member {\n          user {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetChannelsDocument,
    "\n  query GetChannelById($channelId: UUID!) {\n    getChannelById(channelId: $channelId) {\n      id\n      name\n      desc\n      avatarURL\n      kind\n      memberLimit\n      unread\n      updatedAt\n      createdAt\n    }\n  }\n": types.GetChannelByIdDocument,
    "\n  query GetMembersByChannelId($channelId: UUID!) {\n    getMembersByChannelId(channelId: $channelId) {\n      id\n      createdAt\n      updatedAt\n      channelId\n      userId\n      user {\n        name\n        id\n        email\n        avatarURL\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.GetMembersByChannelIdDocument,
    "\n  query GetMessagesByChannelId($channelId: UUID!) {\n    getMessagesByChannelId(channelId: $channelId) {\n      id\n      content\n      updatedAt\n      createdAt\n      channelId\n      memberId\n      member {\n        id\n        user {\n          id\n          name\n          avatarURL\n        }\n      }\n    }\n  }\n": types.GetMessagesByChannelIdDocument,
    "\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      id\n      content\n      updatedAt\n      createdAt\n      channelId\n      memberId\n      member {\n        id\n        user {\n          id\n          name\n          avatarURL\n        }\n      }\n    }\n  }\n": types.CreateMessageDocument,
    "\n  query WhoAmI {\n    whoAmI {\n      id\n      name\n      email\n      avatarURL\n      createdAt\n      updatedAt\n    }\n  }\n": types.WhoAmIDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RefreshTokensWeb {\n    refreshTokensWeb {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation RefreshTokensWeb {\n    refreshTokensWeb {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetChannels {\n    getChannels {\n      id\n      kind\n      createdAt\n      desc\n      memberLimit\n      name\n      unread\n      updatedAt\n      avatarURL\n      lastMessage {\n        id\n        content\n        createdAt\n        member {\n          user {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetChannels {\n    getChannels {\n      id\n      kind\n      createdAt\n      desc\n      memberLimit\n      name\n      unread\n      updatedAt\n      avatarURL\n      lastMessage {\n        id\n        content\n        createdAt\n        member {\n          user {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetChannelById($channelId: UUID!) {\n    getChannelById(channelId: $channelId) {\n      id\n      name\n      desc\n      avatarURL\n      kind\n      memberLimit\n      unread\n      updatedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetChannelById($channelId: UUID!) {\n    getChannelById(channelId: $channelId) {\n      id\n      name\n      desc\n      avatarURL\n      kind\n      memberLimit\n      unread\n      updatedAt\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByChannelId($channelId: UUID!) {\n    getMembersByChannelId(channelId: $channelId) {\n      id\n      createdAt\n      updatedAt\n      channelId\n      userId\n      user {\n        name\n        id\n        email\n        avatarURL\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByChannelId($channelId: UUID!) {\n    getMembersByChannelId(channelId: $channelId) {\n      id\n      createdAt\n      updatedAt\n      channelId\n      userId\n      user {\n        name\n        id\n        email\n        avatarURL\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMessagesByChannelId($channelId: UUID!) {\n    getMessagesByChannelId(channelId: $channelId) {\n      id\n      content\n      updatedAt\n      createdAt\n      channelId\n      memberId\n      member {\n        id\n        user {\n          id\n          name\n          avatarURL\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMessagesByChannelId($channelId: UUID!) {\n    getMessagesByChannelId(channelId: $channelId) {\n      id\n      content\n      updatedAt\n      createdAt\n      channelId\n      memberId\n      member {\n        id\n        user {\n          id\n          name\n          avatarURL\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      id\n      content\n      updatedAt\n      createdAt\n      channelId\n      memberId\n      member {\n        id\n        user {\n          id\n          name\n          avatarURL\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      id\n      content\n      updatedAt\n      createdAt\n      channelId\n      memberId\n      member {\n        id\n        user {\n          id\n          name\n          avatarURL\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WhoAmI {\n    whoAmI {\n      id\n      name\n      email\n      avatarURL\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query WhoAmI {\n    whoAmI {\n      id\n      name\n      email\n      avatarURL\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;