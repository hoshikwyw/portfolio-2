import React, { useEffect, useState } from "react";
import "./moreskill.css";

const Test = ({ progress, darkMode }) => {
  const strokeWidth = 8;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="circular-progress">
      <circle
        className="stroke-current text-gray-200 dark:text-white shadow-md"
        strokeWidth={strokeWidth}
        r={radius - strokeWidth / 2}
        cx="50%"
        cy="50%"
      />
      <circle
        className="stroke-current text-[#525fe1]"
        strokeWidth={strokeWidth}
        r={radius - strokeWidth / 2}
        cx="50%"
        cy="50%"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        }}
      />
      <text
      
        className={` font-bold text-xl flex justify-center items-center custom-progress-value`}
        x="32%"
        y="50%"
        dy=".3em"
        fill=" #525fe1"
        >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default Test;
