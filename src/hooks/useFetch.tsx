import { useState, useEffect } from "react";

type FetchState<T> = {
  isLoading: boolean;
  data: null | T;
  isError: boolean;
};
const useFetch = <T,>(url: string) => {
  const [{ isLoading, data, isError }, setFetchState] = useState<FetchState<T>>(
    {
      isLoading: false,
      data: null,
      isError: false,
    }
  );
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFetchState({ isError: false, isLoading: false, data });
      } catch (error) {
        setFetchState({ isError: true, isLoading: false, data: null });
      }
    })();
  }, [url]);
  return { isLoading, data, isError };
};

export default useFetch;
