"use client";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="w-full fixed h-[50px] flex  border-b shadow-lg">
      <div className="w-[1200px] flex mx-auto">
        <div className="flex justify-between w-full px-4 sm:px-7 p-3 items-center">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
