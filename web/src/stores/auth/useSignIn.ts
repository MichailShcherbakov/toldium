import { useMutation } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import { SING_IN_MUT } from "./queries";
import type { Tokens } from "./type";

export type SingInInput = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const { mutate, onDone, loading, error } = useMutation<{
    signIn: Tokens;
  }>(SING_IN_MUT);

  const router = useRouter();

  function signIn(input: SingInInput) {
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
