import useFetch from "./useFetch";

const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY =
  "live_sZihUO874TvRR4YK0SfuxFvSGynn8SlIFQ3rNCi4ToJNwwRCj34CfFGaQgC1yGeo";
const RANDOM_10_URL =
  BASE_URL + "/images/search?limit=10" + "&api_key=" + API_KEY;
("https://api.thecatapi.com/v1/images/search?limit=10");

export default function useFetchCats() {
  const { isError, isLoading, data } = useFetch(RANDOM_10_URL);
  return {
    isError,
    isLoading,
    cats: data,
  };
}
