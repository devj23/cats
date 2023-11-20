import { NavLink } from "react-router-dom";
import NavLogo from "./NavLogo";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/breeds",
    label: "Breeds",
  },
  {
    to: "/random",
    label: "Random",
  },
];
const linkClass = " text-gray-400 hover:text-gray-200 duration-200";
const activeLinkClass = "text-gray-200 hover:text-gray-400 duration-200";
const NavBar = () => {
  return (
    <header className="bg-slate-900">
      <nav className="container">
        <ul className="gap-5 h-14 flex items-center justify-between">
          <li className="mr-auto">
            <NavLogo />
          </li>
          {links.map((link) => {
            return (
              <li key={link.label}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : linkClass
                  }
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
