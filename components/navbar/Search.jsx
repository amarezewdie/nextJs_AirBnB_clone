"use client";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex justify-between w-full sm:max-w-[40vw] mx-4 sm:mx-auto border rounded-full p-3 gap-4 sm:gap-6 capitalize items-center">
      <div className="md:border-r-2 px-3 ">any where </div>
      <div className="border-r-2 px-3 hidden sm:block">any week</div>
      <div className="flex gap-4">
        <h1 className="hidden md:block">add guest</h1>
        <div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Search;
