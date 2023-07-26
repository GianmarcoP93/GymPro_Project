import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.png";

export const Navbar = () => {
  return (
    <nav className="flex bg-gray w-[100%] justify-between ">
      <img src={logo} alt="" className=" max-h-[65px] ml-8 my-1" />
      <div className=" text-white-100 gap-5 flex items-center hover:decoration-solid">
        <Link className=" hover:border-b ">Home</Link>
        <Link className="hover:border-b">Aziende Partner</Link>
        <Link className="hover:border-b">Chi siamo</Link>
        <Link className="hover:border-b">FAQ</Link>
      </div>
      <div className="flex items-center ">
        <button className=" mr-8 text-white bg-secondary-100 px-10 py-2 border-black border-[1px] rounded-[50px] hover:bg-secondary-200">
          Login
        </button>
      </div>
    </nav>
  );
};
