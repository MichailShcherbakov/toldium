import gql from "graphql-tag";

export const SING_IN_MUT = gql`
  mutation SignIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH_TOKENS_MUT = gql`
  mutation RefreshTokensWeb {
    refreshTokensWeb {
      accessToken
      refreshToken
    }
  }
`;
