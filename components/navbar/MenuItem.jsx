"use client";
import React from "react";

const MenuItem = ({ onclick, label }) => {
  return (
    <div
      onClick={onclick}
      className="px-3 py-2 capitalize  cursor-pointer hover:bg-slate-100 transition rounded-lg shadow-lg"
    >
      {label}
    </div>
  );
};

export default MenuItem;
