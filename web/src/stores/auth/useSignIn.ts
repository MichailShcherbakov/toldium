import { useMutation } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import type { SignInInput } from "~/gql/graphql";
import { SING_IN_MUT } from "./queries";

export const useSignIn = () => {
  const { mutate, onDone, loading, error } = useMutation(SING_IN_MUT);

  const router = useRouter();

  function signIn(input: SignInInput) {
    mutate({
      signInInput: input,
    });
  }

  onDone((result) => {
    if (result.errors) return;

    const data = result.data?.signIn;

    if (!data) return;

    router.push({
      name: "home",
    });
  });

  return {
    signIn,
    loading,
    error,
  };
};
