"use client";
import React from "react";

const Button = ({ onClick, disabled, label, outLine, Icon, small }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` relative disabled:opacity-65 disabled:cursor-not-allowed w-full  flex items-center justify-center shadow-lg p-2 rounded-lg

      ${outLine ? "bg-gray-600" : "bg-rose-400"}
      ${outLine ? "text-white" : "text-white"}
      ${outLine ? "border-rose-400-400" : "border-none"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "py-1" : "py-3"}
      ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <span className="absolute bottom-2 left-2">
          <Icon size={24} />
        </span>
      )}
      <span className="text-center capitalize ">{label}</span>
    </button>
  );
};

export default Button;
