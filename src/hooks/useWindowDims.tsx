import { useEffect, useState } from "react";

type WindowDims = {
  width: number;
  height: number;
};

const useWindowDims = () => {
  const [dims, setDims] = useState<WindowDims>({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      setDims({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return dims;
};

export default useWindowDims;
