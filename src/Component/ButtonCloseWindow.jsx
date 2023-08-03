import esc from "../assets/images/icons/escOrange.png";

export const ButtonCloseWindow = () => {
  return (
    <button className="absolute right-5 top-5">
      <img src={esc} alt="" className=" w-9 " />
    </button>
  );
};
