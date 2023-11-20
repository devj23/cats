import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import useFetchCats from "../hooks/useFetchCats";
import CatCard from "../components/CatCard";

const Random = () => {
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
        <h2 className="text-3xl font-bold mb-5">Random Cats</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {!cats ? <Spinner /> : cats.map((c) => <CatCard key={c.id} {...c} />)}
        </div>
      </div>
    </section>
  );
};

export default Random;
