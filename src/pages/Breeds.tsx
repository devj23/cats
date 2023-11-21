import { useQuery } from "react-query";
import { fetchBreeds } from "../api/cats.api";
import Spinner from "../components/Spinner";
import BreedCard from "../components/BreedCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import useScrollTop from "../hooks/useScrollTop";

const Breeds = () => {
  useScrollTop();
  const { data, isLoading, isError } = useQuery("breeds", fetchBreeds);
  const [term, setTerm] = useState<string>("");
  if (isLoading)
    return (
      <section>
        <div className="container">
          <Spinner />
        </div>
      </section>
    );
  if (isError) {
    return (
      <section>
        <div className="container">Something Went Wrong</div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className="container py-10">
          <BreadCrumbs />
          <SearchBar
            onSubmit={(t) => {
              setTerm(t);
            }}
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {(data as Breed[])
              .filter((br) =>
                br.name.toLowerCase().includes(term.toLowerCase())
              )
              .map((breed) => {
                return <BreedCard {...breed} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Breeds;
