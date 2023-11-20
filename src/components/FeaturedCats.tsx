import { NavLink } from "react-router-dom";
import useFetchCats from "../hooks/useFetchCats";
import CatCard from "./CatCard";
import Spinner from "./Spinner";

const FeaturedCats = () => {
  const { cats, isError, isLoading } = useFetchCats();
  if (isLoading) {
    return <Spinner />;
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
    <section className="bg-gray-300 py-20">
      <div className="container ">
        <div className="flex  flex-wrap justify-center gap-5">
          {!cats ? (
            <Spinner />
          ) : (
            cats.slice(0, 3).map((c) => <CatCard key={c.id} {...c} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCats;
