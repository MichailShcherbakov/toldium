/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** uuid type */
  UUID: any;
};

export type Channel = {
  __typename?: 'Channel';
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  desc?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  kind: ChannelKindEnum;
  lastMessage?: Maybe<Message>;
  lastMessageId?: Maybe<Scalars['UUID']>;
  memberLimit: Scalars['Int'];
  name: Scalars['String'];
  unread: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export enum ChannelKindEnum {
  Dialog = 'DIALOG',
  Group = 'GROUP',
  Public = 'PUBLIC'
}

export type CreateMessageInput = {
  channelId: Scalars['UUID'];
  content: Scalars['String'];
  memberId: Scalars['UUID'];
};

export type Member = {
  __typename?: 'Member';
  channel: Channel;
  channelId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['UUID'];
};

export type Message = {
  __typename?: 'Message';
  channel: Channel;
  channelId: Scalars['UUID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  member: Member;
  memberId: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  /** Use for mobile apps */
  refreshTokensMobile: Tokens;
  /** Use for web apps */
  refreshTokensWeb: Tokens;
  signIn: Tokens;
  signOut: Scalars['Boolean'];
  signUp: User;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationRefreshTokensMobileArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignOutArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type Query = {
  __typename?: 'Query';
  getChannelById?: Maybe<Channel>;
  getChannels: Array<Channel>;
  getMembersByChannelId: Array<Member>;
  getMessagesByChannelId: Array<Message>;
  getUserById?: Maybe<User>;
  getUsers: Array<User>;
  whoAmI: User;
};


export type QueryGetChannelByIdArgs = {
  channelId: Scalars['UUID'];
};


export type QueryGetMembersByChannelIdArgs = {
  channelId: Scalars['UUID'];
};


export type QueryGetMessagesByChannelIdArgs = {
  channelId: Scalars['UUID'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['UUID'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  avatarURL?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageAdded: Message;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Tokens', accessToken: string, refreshToken: string } };

export type RefreshTokensWebMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensWebMutation = { __typename?: 'Mutation', refreshTokensWeb: { __typename?: 'Tokens', accessToken: string, refreshToken: string } };

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = { __typename?: 'Query', getChannels: Array<{ __typename?: 'Channel', id: any, kind: ChannelKindEnum, createdAt: any, desc?: string | null, memberLimit: number, name: string, unread: number, updatedAt: any, avatarURL?: string | null, lastMessage?: { __typename?: 'Message', id: any, content: string, createdAt: any, member: { __typename?: 'Member', user: { __typename?: 'User', id: any, name: string } } } | null }> };

export type GetChannelByIdQueryVariables = Exact<{
  channelId: Scalars['UUID'];
}>;


export type GetChannelByIdQuery = { __typename?: 'Query', getChannelById?: { __typename?: 'Channel', id: any, name: string, desc?: string | null, avatarURL?: string | null, kind: ChannelKindEnum, memberLimit: number, unread: number, updatedAt: any, createdAt: any } | null };

export type GetMembersByChannelIdQueryVariables = Exact<{
  channelId: Scalars['UUID'];
}>;


export type GetMembersByChannelIdQuery = { __typename?: 'Query', getMembersByChannelId: Array<{ __typename?: 'Member', id: any, createdAt: any, updatedAt: any, channelId: any, userId: any, user: { __typename?: 'User', name: string, id: any, email: string, avatarURL?: string | null, createdAt: any, updatedAt: any } }> };

export type GetMessagesByChannelIdQueryVariables = Exact<{
  channelId: Scalars['UUID'];
}>;


export type GetMessagesByChannelIdQuery = { __typename?: 'Query', getMessagesByChannelId: Array<{ __typename?: 'Message', id: any, content: string, updatedAt: any, createdAt: any, channelId: any, memberId: any, member: { __typename?: 'Member', id: any, user: { __typename?: 'User', id: any, name: string, avatarURL?: string | null } } }> };

export type CreateMessageMutationVariables = Exact<{
  createMessageInput: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: any, content: string, updatedAt: any, createdAt: any, channelId: any, memberId: any, member: { __typename?: 'Member', id: any, user: { __typename?: 'User', id: any, name: string, avatarURL?: string | null } } } };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', id: any, name: string, email: string, avatarURL?: string | null, createdAt: any, updatedAt: any } };


export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const RefreshTokensWebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshTokensWeb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshTokensWeb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokensWebMutation, RefreshTokensWebMutationVariables>;
export const GetChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"memberLimit"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unread"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"avatarURL"}},{"kind":"Field","name":{"kind":"Name","value":"lastMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelsQuery, GetChannelsQueryVariables>;
export const GetChannelByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChannelById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"avatarURL"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memberLimit"}},{"kind":"Field","name":{"kind":"Name","value":"unread"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetChannelByIdQuery, GetChannelByIdQueryVariables>;
export const GetMembersByChannelIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByChannelId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMembersByChannelId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetMembersByChannelIdQuery, GetMembersByChannelIdQueryVariables>;
export const GetMessagesByChannelIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessagesByChannelId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMessagesByChannelId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatarURL"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMessagesByChannelIdQuery, GetMessagesByChannelIdQueryVariables>;
export const CreateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createMessageInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createMessageInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createMessageInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatarURL"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const WhoAmIDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WhoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WhoAmIQuery, WhoAmIQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** uuid type */
  UUID: any;
};

export type Channel = {
  __typename?: 'Channel';
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  desc?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  kind: ChannelKindEnum;
  lastMessage?: Maybe<Message>;
  lastMessageId?: Maybe<Scalars['UUID']>;
  memberLimit: Scalars['Int'];
  name: Scalars['String'];
  unread: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export enum ChannelKindEnum {
  Dialog = 'DIALOG',
  Group = 'GROUP',
  Public = 'PUBLIC'
}

export type CreateMessageInput = {
  channelId: Scalars['UUID'];
  content: Scalars['String'];
  memberId: Scalars['UUID'];
};

export type Member = {
  __typename?: 'Member';
  channel: Channel;
  channelId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['UUID'];
};

export type Message = {
  __typename?: 'Message';
  channel: Channel;
  channelId: Scalars['UUID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  member: Member;
  memberId: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  /** Use for mobile apps */
  refreshTokensMobile: Tokens;
  /** Use for web apps */
  refreshTokensWeb: Tokens;
  signIn: Tokens;
  signOut: Scalars['Boolean'];
  signUp: User;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationRefreshTokensMobileArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignOutArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type Query = {
  __typename?: 'Query';
  getChannelById?: Maybe<Channel>;
  getChannels: Array<Channel>;
  getMembersByChannelId: Array<Member>;
  getMessagesByChannelId: Array<Message>;
  getUserById?: Maybe<User>;
  getUsers: Array<User>;
  whoAmI: User;
};


export type QueryGetChannelByIdArgs = {
  channelId: Scalars['UUID'];
};


export type QueryGetMembersByChannelIdArgs = {
  channelId: Scalars['UUID'];
};


export type QueryGetMessagesByChannelIdArgs = {
  channelId: Scalars['UUID'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['UUID'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  avatarURL?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageAdded: Message;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Tokens', accessToken: string, refreshToken: string } };

export type RefreshTokensWebMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensWebMutation = { __typename?: 'Mutation', refreshTokensWeb: { __typename?: 'Tokens', accessToken: string, refreshToken: string } };

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = { __typename?: 'Query', getChannels: Array<{ __typename?: 'Channel', id: any, kind: ChannelKindEnum, createdAt: any, desc?: string | null, memberLimit: number, name: string, unread: number, updatedAt: any, avatarURL?: string | null, lastMessage?: { __typename?: 'Message', id: any, content: string, createdAt: any, member: { __typename?: 'Member', user: { __typename?: 'User', id: any, name: string } } } | null }> };

export type GetChannelByIdQueryVariables = Exact<{
  channelId: Scalars['UUID'];
}>;


export type GetChannelByIdQuery = { __typename?: 'Query', getChannelById?: { __typename?: 'Channel', id: any, name: string, desc?: string | null, avatarURL?: string | null, kind: ChannelKindEnum, memberLimit: number, unread: number, updatedAt: any, createdAt: any } | null };

export type GetMembersByChannelIdQueryVariables = Exact<{
  channelId: Scalars['UUID'];
}>;


export type GetMembersByChannelIdQuery = { __typename?: 'Query', getMembersByChannelId: Array<{ __typename?: 'Member', id: any, createdAt: any, updatedAt: any, channelId: any, userId: any, user: { __typename?: 'User', name: string, id: any, email: string, avatarURL?: string | null, createdAt: any, updatedAt: any } }> };

export type GetMessagesByChannelIdQueryVariables = Exact<{
  channelId: Scalars['UUID'];
}>;


export type GetMessagesByChannelIdQuery = { __typename?: 'Query', getMessagesByChannelId: Array<{ __typename?: 'Message', id: any, content: string, updatedAt: any, createdAt: any, channelId: any, memberId: any, member: { __typename?: 'Member', id: any, user: { __typename?: 'User', id: any, name: string, avatarURL?: string | null } } }> };

export type CreateMessageMutationVariables = Exact<{
  createMessageInput: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: any, content: string, updatedAt: any, createdAt: any, channelId: any, memberId: any, member: { __typename?: 'Member', id: any, user: { __typename?: 'User', id: any, name: string, avatarURL?: string | null } } } };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', id: any, name: string, email: string, avatarURL?: string | null, createdAt: any, updatedAt: any } };
