import { Link } from "react-router-dom";
import esc from "../../assets/images/icons/escOrange.png";

export const ButtonCloseWindow = ({ path, func }) => {
  return (
    <Link to={path} onClick={func} className="absolute right-5 top-5">
      <img src={esc} alt="" className=" w-9 " />
    </Link>
  );
};
