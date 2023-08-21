import React from "react";

const YellowButton = ({ text }) => {
  return (
    <>
      <button className="px-12 py-1 border-black border-[1px] rounded-[50px] text-black bg-yellow-100  hover:bg-yellow-200">
        {text}
      </button>
    </>
  );
};

export default YellowButton;
