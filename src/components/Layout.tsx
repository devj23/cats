import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ToTop from "./ToTop";

const Layout = () => {
  return (
    <>
      <ToTop />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
