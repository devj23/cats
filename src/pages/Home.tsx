import { useQuery } from "react-query";
import { fetchRandomCats } from "../api/cats.api";
import Spinner from "../components/Spinner";
import CatCard from "../components/CatCard";

const Home = () => {
  const { data, isLoading, isError } = useQuery("featured", fetchRandomCats);
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
          <h2 className="text-3xl font-bold mb-5">Featured Cats</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {(data as Cat[]).slice(0, 3).map((cat) => {
              return <CatCard {...cat} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
