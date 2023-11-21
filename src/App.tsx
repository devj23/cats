import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import SingleBreed from "./pages/SingleBreed";
import Categories from "./pages/Categories";
import SingleCategory from "./pages/SingleCategory";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} index path="/" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<SingleCategory />} path="/categories/:categoryId" />
        <Route element={<Breeds />} path="/breeds" />
        <Route element={<SingleBreed />} path="/breeds/:breedId" />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
