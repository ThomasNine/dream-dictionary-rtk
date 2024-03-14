import React, { useState } from "react";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const nav = useNavigate();
  const [searchWords, setSearchWords] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchWords) {
      nav(`/search/${searchWords}`);
    }
  };
  const handleSearchTyping = (e) => {
    setSearchWords(e.target.value);
  };
  console.log(searchWords);
  return (
    <div className="flex justify-center items-center mx-3 ">
      <form
        onSubmit={handleSubmit}
        className=" bg-slate-950  w-full sm:w-2/3 lg:w-1/2 shadow-md  shadow-purple-800 hover:shadow-lg hover:shadow-purple-600 transition duration-300"
      >
        <Input
          className=" py-7 focus-visible:ring-0"
          value={searchWords}
          placeholder="Type a command or search..."
          onChange={handleSearchTyping}
        />
      </form>
    </div>
  );
};

export default SearchBar;
