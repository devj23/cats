import { NavLink } from "react-router-dom";

type CatCardProps = Cat & {
  includeBody?: boolean;
};

const CatCard = ({ id, breeds, url, includeBody = true }: CatCardProps) => {
  return (
    <div className="flex-grow flex flex-col min-w-[200px] md:max-w-[350px] bg-white rounded-md">
      <div
        className={`h-[300px] rounded-t-md overflow-hidden relative ${
          !includeBody && "rounded-b-md"
        }`}
      >
        <img className="object-cover w-full h-full object-top" src={url} />
        <span className="text-gray-200 rounded-md block absolute bottom-2 right-2 bg-[rgba(0,0,0,.5)] p-2">
          ID: {id}
        </span>
      </div>
      {includeBody && (
        <div className="p-6 flex-grow">
          {breeds.map((breed) => {
            return (
              <div
                key={breed.id}
                className="flex flex-col justify-between h-full items-start"
              >
                <div>
                  <h6 className="text-xl font-bold leading-snug mb-4">
                    {breed.name}
                  </h6>

                  <p className="leading-snug text-gray-600 mb-4">
                    {breed.description.length > 75
                      ? breed.description.slice(0, 75) + "..."
                      : breed.description}
                  </p>
                </div>
                <NavLink
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 duration-200 rounded-md text-gray-200"
                  to={`/breeds/${breed.id}`}
                  state={{ name: breed.name, description: breed.description }}
                >
                  More Like Me
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CatCard;
