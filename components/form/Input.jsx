"use client";
import React from "react";
import { BiDollar } from "react-icons/bi";

const Input = ({
  id,
  label,
  type = "text",
  required,
  register,
  errors,
  formatPrice,
  placeholder,
  disabled,
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && <BiDollar size={24} className="absolute top-5 left-2" />}

      <input
        disabled={disabled}
        {...register(id, { required: required })}
        placeholder={placeholder}
        type={type}
        id={id}
        className={`peer w-full p-2 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed mt-2
        ${formatPrice ? "pl-9" : "pl-3"}
        ${errors[id] ? "border-red-600" : "border-slate-100"}
        ${errors[id] ? "focus:border-red-600" : "focus:border-slate-100"}`}
      />
    </div>
  );
};

export default Input;
