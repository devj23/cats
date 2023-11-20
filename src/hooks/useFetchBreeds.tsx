import useFetch from "./useFetch";

const useFetchBreeds = () => {
  const { data, isError, isLoading } = useFetch(
    "https://api.thecatapi.com/v1/breeds"
  );
  return {
    breeds: data as Breed[],
    isError,
    isLoading,
  };
};

export default useFetchBreeds;
