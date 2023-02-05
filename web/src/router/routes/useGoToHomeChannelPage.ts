import { useRouter } from "vue-router";

export const useGoToHomeChannelPage = () => {
  const router = useRouter();

  function navigate(channelId: string) {
    router.push({
      name: "home-channel",
      params: {
        id: channelId,
      },
    });
  }

  return {
    navigate,
  };
};
