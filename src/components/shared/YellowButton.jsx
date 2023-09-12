import React from "react";

const YellowButton = ({ text, func }) => {
  return (
    <>
      <button
        onClick={func}
        className="px-6 py-1 border-black border-[1px] rounded-[50px] text-black bg-yellow-100  hover:bg-yellow-200"
      >
        {text}
      </button>
    </>
  );
};

export default YellowButton;
