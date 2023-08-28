import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/Logo.png";
import { OrangeButton } from "./OrangeButton";

export const Navbar = () => {
  return (
    <nav className="flex bg-gray justify-between px-8 py-2 max-sm:flex max-sm:justify-between max-sm:px-2 max-sm:gap-2">
      <img src={logo} alt="" className=" w-[50px] h-[50px]" />
      <div className=" text-white-100 gap-5 flex items-center hover:decoration-solid font-roboto max-sm:gap-2 max-sm:flex">
        <Link className=" hover:border-b hover:text-yellow-200 max-sm:text-sm ">
          Home
        </Link>
        <Link className="hover:border-b hover:text-yellow-200 max-sm:text-sm max-sm:text-center">
          Aziende Partner
        </Link>
        <Link className="hover:border-b hover:text-yellow-200 max-sm:text-sm">
          Chi siamo
        </Link>
        <Link
          to="/faq"
          className="hover:border-b hover:text-yellow-200 max-sm:text-sm"
        >
          FAQ
        </Link>
      </div>
      <div className="flex items-center ">
        <OrangeButton text="Login" type="link" path="/login" />
      </div>
    </nav>
  );
};
