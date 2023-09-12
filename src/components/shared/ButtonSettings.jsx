import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export const ButtonSettings = ({ text, isRed }) => {
  return (
    <button
      className={clsx(
        "text-white-100 items-center hover:bg-gray-100 justify-between fill-[#FFFFFF] flex px-4 py-3 w-full text-sm border-b border-b-white-100 last:border-none",
        isRed &&
          "fill-red-500 text-red-500 hover:text-red-100 hover:fill-red-100",
        !isRed && "hover:fill-secondary-100 hover:text-secondary-100"
      )}
    >
      {text}
      <FontAwesomeIcon size="lg" icon="fa-solid fa-arrow-right" />
    </button>
  );
};
