import { useState } from "react";

type SearchBarProps = {
  onSubmit: (data: string) => void;
};
const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [term, setTerm] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(term);
      }}
      className="flex items-center justify-center mb-5 gap-5"
    >
      <input
        onChange={(e) => {
          e.preventDefault();
          setTerm(e.target.value);
          if (e.target.value === "") onSubmit("");
        }}
        className="duration-200 border-gray-300 w-full p-2 rounded-md outline-none border-2 focus:border-gray-500"
        type="text"
        placeholder="Enter Search Term..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 duration-200 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
