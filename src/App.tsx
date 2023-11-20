import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import Random from "./pages/Random";
import SingleBreed from "./pages/SingleBreed";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} index path="/" />
        <Route element={<Breeds />} path="/breeds" />
        <Route element={<SingleBreed />} path="/breeds/:breedId" />
        <Route element={<Random />} path="/random" />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
