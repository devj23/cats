import { useQuery } from "react-query";
import { fetchCatsByBreed } from "../api/cats.api";
import Spinner from "../components/Spinner";

import { useParams } from "react-router-dom";
import CatCard from "../components/CatCard";
import BreadCrumbs from "../components/BreadCrumbs";
import useScrollTop from "../hooks/useScrollTop";

const SingleBreed = () => {
  useScrollTop();
  const { breedId } = useParams();
  const { data, isLoading, isError } = useQuery(
    `breeds/${breedId!}`,
    fetchCatsByBreed([breedId!])
  );
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
  const breedInfo = data[0].breeds[0];
  return (
    <>
      <section>
        <div className="container py-10">
          <BreadCrumbs />
          <h2 className="text-3xl font-bold leading-snug mb-2">
            {breedInfo.name}
          </h2>
          <p className="mb-5  text-lg text-gray-600">{breedInfo.description}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {(data as Cat[]).map((breed) => {
              return <CatCard includeBody={false} {...breed} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBreed;
