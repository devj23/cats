import { NavLink } from "react-router-dom";
import useFetchBreeds from "../hooks/useFetchBreeds";
import { useState } from "react";
import Spinner from "../components/Spinner";

const Breeds = () => {
  const [term, setTerm] = useState<string>("");
  const { breeds, isError, isLoading } = useFetchBreeds();
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
    <>
      <section>
        <div className="container py-10">
          <h2 className="text-3xl font-bold mb-5">Cat Breeds</h2>
          <div className="flex items-center mb-5 bg-white p-6 rounded-md">
            <input
              value={term}
              onChange={(e) => {
                e.preventDefault();
                setTerm(e.target.value);
              }}
              className="w-full border-2 p-2 mr-5 rounded-md outline-none duration-200 focus:border-gray-500"
              type="text"
              placeholder="Search breeds..."
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {breeds === null || !breeds.length ? (
              <div className="col-span-full justify-center flex items-center w-full h-full">
                <Spinner />
              </div>
            ) : (
              breeds
                .filter((item) =>
                  term === "" ? true : item.name.includes(term)
                )
                .map((br) => {
                  return (
                    <NavLink
                      state={{ name: br.name, description: br.description }}
                      key={br.id}
                      to={`/breeds/${br.id}`}
                    >
                      <div className="p-6 rounded-md bg-white hover:bg-gray-300 duration-200">
                        <h4>{br.name}</h4>
                      </div>
                    </NavLink>
                  );
                })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Breeds;
