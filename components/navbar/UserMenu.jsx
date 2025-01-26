"use client";
import React, { useState } from "react";
import Avatar from "../Avatar";
import { MenuIcon } from "lucide-react";
import MenuItem from "./MenuItem";
import useRegisterModel from "../hooks/useRegisterModel";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModel = useRegisterModel();

  return (
    <div>
      <div className="flex items-center gap-4 sm:gap-10">
        <div className="cursor-pointer capitalize hidden md:block">
          airbnb home
        </div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex gap-4 items-center border rounded-full px-5 py-2 cursor-pointer"
        >
          <MenuIcon />
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[50px] right-0 w-[30vw] sm:w-[20vw] lg:w-[15vw] shadow-lg bg-white rounded-lg border ">
          <MenuItem onclick={() => {}} label={"login"} />
          <MenuItem onclick={registerModel.onOpen} label={"sign up"} />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
