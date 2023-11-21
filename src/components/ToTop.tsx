import { useEffect, useState } from "react";

const ToTop = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      window.scrollY < 100 ? setHidden(true) : setHidden(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      onClick={scrollTop}
      className={`${
        hidden && "hidden"
      } text-gray-200 z-[100] fixed bottom-[50px] right-[50px] w-10 h-10 bg-indigo-500 hover:bg-indigo-600 duration-200 rounded-full`}
    >
      &uarr;
    </button>
  );
};

export default ToTop;
