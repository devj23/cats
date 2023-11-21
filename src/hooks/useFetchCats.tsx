import useFetch from "./useFetch";

export default function useFetchCats(breedIds?: string[]) {
  const extra = breedIds ? `&breed_ids=${breedIds.join(",")}` : "";
  const { isError, isLoading, data } = useFetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
      import.meta.env.VITE_API_KEY
    }${extra}`
  );
  return {
    isError,
    isLoading,
    cats: data as Cat[] | null,
  };
}
