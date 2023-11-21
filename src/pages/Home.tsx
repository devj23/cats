import { useQuery } from "react-query";
import { fetchRandomCats } from "../api/cats.api";
import Spinner from "../components/Spinner";
import CatCard from "../components/CatCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const navTo = (url: string) => () => nav(url);
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
      <section className="bg-gray-300">
        <div className="container py-10">
          <h1 className="text-4xl font-bold leading-snug mb-4">
            Nothing But Cats
          </h1>
          <p className="mb-4 text-lg text-gray-600">
            All the kitties you'll ever need!
          </p>
          <button
            onClick={navTo("/breeds")}
            className="bg-blue bg-blue-500 hover:bg-blue-600 duration-200 rounded-md text-gray-200 px-4 py-2"
          >
            View Breeds
          </button>
        </div>
      </section>
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
