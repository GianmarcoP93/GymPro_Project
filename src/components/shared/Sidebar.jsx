import { Link, useNavigate } from "react-router-dom";
import proPic from "../../assets/images/placeholders/noPicture.jpg";
import logo from "../../assets/images/logo/LogoPiccolo.png";
import logoutImg from "../../assets/images/icons/logout.png";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { adminLogout, logout } from "../../store/userSlice";

export const Sidebar = ({ name, email, isGym }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(adminLogout());
    navigate("/login");
  };

  return (
    <div className="sticky bg-gray min-w-[300px] top-6 left-0 h-[calc(100vh_-_48px)]  flex flex-col p-6 rounded-2xl">
      <div className="flex justify-center items-center gap-4">
        <div className="rounded-full w-12 h-12 flex-shrink-0">
          <img src={proPic} className="rounded-full" />
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
          to={clsx(isGym && "/admin/dashboard", !isGym && "/user")}
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
        {isGym && (
          <Link
            to="../manage"
            className="hover:underline underline-offset-8 hover:text-secondary-200"
          >
            Lista Utenti
          </Link>
        )}
        <Link aria-disabled className="hover:text-red-500 cursor-not-allowed">
          Assistenza
        </Link>
        <Link aria-disabled className="hover:text-red-500 cursor-not-allowed">
          FAQ
        </Link>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img src={logo} alt="logo" />
        <button
          onClick={handleLogout}
          className="border-none text-secondary-100 flex items-center gap-2"
        >
          Logout <img src={logoutImg} />
        </button>
      </div>
    </div>
  );
};
