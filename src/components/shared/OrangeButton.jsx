import clsx from "clsx";
import { Link } from "react-router-dom";

export const OrangeButton = ({ text, twProp, type, func, path }) => {
  return (
    <>
      {type === "submit" && (
        <button
          className={clsx(
            "bg-secondary-100 px-6 py-1 border-black border-[1px] rounded-[50px] hover:bg-secondary-200  text-white-100 max-w-fit",
            twProp && `${twProp}`
          )}
          type={type}
          onSubmit={func}
        >
          {text}
        </button>
      )}
      {type === undefined && (
        <button
          className={clsx(
            "bg-secondary-100 px-6 py-1 border-black border-[1px] rounded-[50px] hover:bg-secondary-200  text-white-100 max-w-fit",
            twProp && `${twProp}`
          )}
          type={type}
          onClick={func}
        >
          {text}
        </button>
      )}
      {type === "link" && (
        <Link
          to={path}
          className={clsx(
            "bg-secondary-100 px-6 py-1 border-black border-[1px] rounded-[50px] hover:bg-secondary-200  text-white-100 max-w-fit font-roboto font-semibold",
            twProp && `${twProp}`
          )}
          type={type}
          onSubmit={func}
        >
          {text}
        </Link>
      )}
    </>
  );
};
