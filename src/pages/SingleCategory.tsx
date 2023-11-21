import { useQuery } from "react-query";
import { fetchCatsByCategory } from "../api/cats.api";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import CatCard from "../components/CatCard";
import BreadCrumbs from "../components/BreadCrumbs";

const SingleCategory = () => {
  const { categoryId } = useParams();
  const { data, isLoading, isError } = useQuery(
    `categories/${categoryId}`,
    fetchCatsByCategory([categoryId!])
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

  return (
    <>
      <section>
        <div className="container py-10">
          <BreadCrumbs />
          <h2 className="text-3xl font-bold leading-snug mb-2 first-letter:uppercase">
            {data[0].categories[0].name}
          </h2>

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

export default SingleCategory;
