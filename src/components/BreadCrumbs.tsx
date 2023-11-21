import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const renderLink = () => {
    const path = pathname.split("/");

    return path.map((item, idx: number) => {
      const to = item === "" ? "/" : path.slice(0, idx + 1).join("/");

      return (
        <li key={item + idx}>
          <NavLink
            className="text-gray-700 font-medium first-letter:uppercase block"
            to={to}
          >
            {item === "" ? "/Home" : `/${item}`}
          </NavLink>
        </li>
      );
    });
  };
  return (
    <div>
      <ul className="flex gap-5 mb-5">{renderLink()}</ul>
    </div>
  );
};

export default BreadCrumbs;
