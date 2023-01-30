import { watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNELS } from "~/stores/queries";

export const useChannels = () => {
  const { result } = useQuery(GET_CHANNELS);

  watch(result, (value) => {
    console.log(value);
  });
};
