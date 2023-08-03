export const SubscriptionInput = ({
  type,
  name,
  placeholder,
  value,
  onInput,
  mindate,
  text,
  isButton,
  clickfunc,
}) => {
  return (
    <>
      {isButton ? (
        <div className="flex justify-between">
          <button
            type="button"
            onClick={clickfunc}
            className="text-center font-semibold text-white-100 font-montserrat underline underline-offset-2 hover:text-secondary-300"
          >
            {text}
          </button>
          <input
            className="text-white-100 bg-transparent border border-white-100 rounded-lg outline-none pl-2 min-w-[220px]"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onInput={onInput}
            min={mindate}
            required
            disabled={true}
          />
        </div>
      ) : (
        <label
          htmlFor={name}
          className="font-semibold text-white-100 flex justify-between"
        >
          {text}
          <input
            className="bg-transparent border border-white-100 rounded-lg outline-none pl-2 min-w-[220px]"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onInput={onInput}
            min={mindate}
            required
          />
        </label>
      )}
    </>
  );
};
