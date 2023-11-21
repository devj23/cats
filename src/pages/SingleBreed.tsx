import { NavLink, useLocation, useParams } from "react-router-dom";

import useFetchCats from "../hooks/useFetchCats";
import CatCard from "../components/CatCard";

const SingleBreed = () => {
  const {
    state: { name, description },
  } = useLocation();
  const { breedId } = useParams();
  const { cats, isError, isLoading } = useFetchCats(
    breedId ? [breedId] : undefined
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>
        <h2>Sorry Something Went Wrong</h2>
        <NavLink to="..">Go Back</NavLink>
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="container py-10">
          <h2 className="text-3xl font-bold mb-5">{name} Cats</h2>
          <p className="text-gray-600 font-medium text-lg mb-10">
            {description}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {cats !== null &&
              cats.length &&
              cats.map((c) => (
                <CatCard includeBody={false} key={c.id} {...c} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBreed;
