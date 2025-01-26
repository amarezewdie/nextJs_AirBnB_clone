import React from "react";

const Heading = ({ title, subTitle, center }) => {
  return (
    <div
      className={`flex flex-col gap-1 ${center ? "text-center" : "text-start"}`}
    >
      <div className="font-bold text-xl">{title}</div>
      <div className="font-semibold capitalize ">{subTitle}</div>
    </div>
  );
};

export default Heading;
