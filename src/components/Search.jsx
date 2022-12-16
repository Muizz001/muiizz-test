import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }
  return (
    <div className="w-[90%] sm:mt-[63px] mt-[56px]">
      <p className="sm:text-[24px] text-[18px] mb-[4px]">Search</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-[34px] bg-none border-black  border-[1px] focus:outline-none pl-2"
        />
      </form>
    </div>
  );
};

export default Search;
