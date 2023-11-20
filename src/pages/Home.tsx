import { useNavigate } from "react-router-dom";
import FeaturedCats from "../components/FeaturedCats";

const Home = () => {
  const navi = useNavigate();
  const navTo = (link: string) => () => navi(link);
  return (
    <>
      <section>
        <div className="container gap-4 flex flex-col items-center py-20">
          <h1 className="text-5xl font-bold leading-snug">Nothing But Cats</h1>
          <p className="text-lg font-medium">
            All the kitties you could ever want to see, and more!
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={navTo("/breeds")}
              className="duration-200 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              All Cat Breeds
            </button>
            <button
              onClick={navTo("/random")}
              className="duration-200 px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Random Kitties
            </button>
          </div>
        </div>
      </section>
      <FeaturedCats />
    </>
  );
};

export default Home;
