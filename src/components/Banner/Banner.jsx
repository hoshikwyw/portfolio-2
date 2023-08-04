import React from "react";

const Banner = ({ title }) => {
  return (
    <div>
      <div className=" select-none">
        <span className={`relative text-[#0B0B13] dark:text-[#FFFFFF] text-3xl tracking-wide font-medium`}>
          {title}
        <div className=" h-12 w-12 bg-[#525ee153] rounded-[50%] absolute circleMove top-0 left-[-14px]"> </div>
        </span>
      </div>
    </div>
  );
};

export default Banner;
