import { NavLink } from "react-router-dom";

const NavLogo = () => {
  return (
    <NavLink
      to="/"
      className="text-xl font-bold text-gray-200 hover:text-gray-400 duration-200"
    >
      Cats
    </NavLink>
  );
};

export default NavLogo;
