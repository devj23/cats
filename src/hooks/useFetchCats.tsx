import useFetch from "./useFetch";
/*

const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY =
  "live_sZihUO874TvRR4YK0SfuxFvSGynn8SlIFQ3rNCi4ToJNwwRCj34CfFGaQgC1yGeo";

*/

export default function useFetchCats(breedIds?: string[]) {
  const extra = breedIds ? `&breed_ids=${breedIds.join(",")}` : "";
  const { isError, isLoading, data } = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_sZihUO874TvRR4YK0SfuxFvSGynn8SlIFQ3rNCi4ToJNwwRCj34CfFGaQgC1yGeo" +
      extra
  );
  return {
    isError,
    isLoading,
    cats: data as Cat[] | null,
  };
}
