import { Link } from "react-router-dom";
import proPic from "../assets/images/gymPropic.png";
import logo from "../assets/images/logo/LogoPiccolo.png";
import logout from "../assets/images/icons/logout.png";
import clsx from "clsx";

export const Sidebar = ({ name, email, isGym }) => {
  return (
    <div className="bg-gray max-w-xs flex flex-col p-6 rounded-2xl ">
      <div className="flex justify-center items-center gap-4">
        <div className="rounded-full w-12 h-12 flex-shrink-0">
          <img src={proPic} />
        </div>
        <div>
          <p className="text-secondary-100 font-semibold text-xl break-all">
            {name}
          </p>
          <p className="text-white-100 text-xs break-all">{email}</p>
        </div>
      </div>
      <div className="text-white-100 flex-grow flex flex-col justify-center items-center font-semibold gap-4">
        <Link
          to={clsx(isGym && "/admin", !isGym && "/user")}
          className="hover:underline underline-offset-8 hover:text-secondary-200"
        >
          Home
        </Link>
        <Link
          to="settings"
          className="hover:underline underline-offset-8 hover:text-secondary-200"
        >
          Impostazioni
        </Link>
        <Link className="hover:underline underline-offset-8 hover:text-secondary-200">
          Assistenza
        </Link>
        <Link className="hover:underline underline-offset-8 hover:text-secondary-200">
          Lista Utenti
        </Link>
        <Link className="hover:underline underline-offset-8 hover:text-secondary-200">
          FAQ
        </Link>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img src={logo} alt="logo" />
        <button className="border-none text-secondary-100 flex items-center gap-2">
          Logout <img src={logout} />
        </button>
      </div>
    </div>
  );
};
