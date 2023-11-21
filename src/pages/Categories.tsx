import { useQuery } from "react-query";
import { fetchCategories } from "../api/cats.api";
import Spinner from "../components/Spinner";
import { NavLink } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import useScrollTop from "../hooks/useScrollTop";

const Categories = () => {
  useScrollTop();
  const { data, isLoading, isError } = useQuery("categories", fetchCategories);
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
          <h2 className="text-3xl font-bold mb-5">Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {(data as Category[]).map((cat) => {
              return (
                <NavLink to={`/categories/${cat.id}`} className="group">
                  <div className="p-6 bg-white rounded-md group-hover:bg-gray-300 duration-200">
                    {cat.name}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
