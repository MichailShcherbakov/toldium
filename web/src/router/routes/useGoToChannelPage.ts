import { useRouter } from "vue-router";

export const useGoToChannelPage = () => {
  const router = useRouter();

  function navigate(channelId: string) {
    router.push({
      name: "channel",
      params: {
        id: channelId,
      },
    });
  }

  return {
    navigate,
  };
};
