import clsx from "clsx";

export const OrangeButton = ({ text, twProp, type, func }) => {
  return (
    <>
      {type === "submit" ? (
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
      ) : (
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
    </>
  );
};
