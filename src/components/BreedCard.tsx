import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";

type BreedCardProps = Breed;
const BreedCard = ({
  id,
  name,
  reference_image_id,
  description,
}: BreedCardProps) => {
  const [img, setImg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/${reference_image_id}`)
      .then((res) => res.json())
      .then((res) => {
        setImg(res.url);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        return console.log(err);
      });
  }, [reference_image_id]);
  return (
    <div
      className={`${
        isLoading
          ? "bg-gray-400 min-h-[250px] flex justify-center items-center"
          : "bg-white"
      } rounded-md flex flex-col`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {img !== "" && (
            <div className="overflow-hidden h-[250px] rounded-t-md">
              <img className="object-cover object-center" src={img} />
            </div>
          )}
          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h4 className="text-xl font-medium mb-4">{name}</h4>
              <p className="text-gray-600 mb-4">{description}</p>
            </div>
            <NavLink
              className="w-min whitespace-nowrap block px-4 py-2 bg-blue-500 hover:bg-blue-600 duration-200 rounded-md text-gray-200"
              to={`/breeds/${id}`}
              state={{ name, description }}
            >
              More Like Me
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default BreedCard;
