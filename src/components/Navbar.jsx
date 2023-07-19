import { Link } from "react-router-dom";
import logo from "../assets/logo/logo2.png";
import lente from "../assets/icons/lente.png";
import filter from "../assets/icons/filter.png";

export const Navbar = () => {
  return (
    <nav className="border-b-[1px] flex justify-between pl-6 pr-6">
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <span className="flex items-center border-2 border-solid border-black rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full overflow-hidden">
          <input
            type="search"
            name="searchbar"
            placeholder="Cerca..."
            className="pl-4 outline-none"
          />
          <img src={lente} alt="lente" className="max-w-[1rem] m-2" />
        </span>
        <button className="[&>*:nth-child(2)]:hover:block">
          <img src={filter} alt="filter" className="max-w-[1.9rem]" />
          <span className="hidden text-sm text-[#3903DE] font-bold">
            Filter
          </span>
        </button>
      </div>
      <div className="flex items-center gap-8">
        <Link
          to={"/"}
          className="flex flex-col justify-center items-center [&>*:nth-child(2)]:hover:block"
        >
          <lord-icon
            src="https://cdn.lordicon.com/osuxyevn.json"
            trigger="hover"
            colors="primary:#121331"
            style={{ width: 36, height: 36, display: "block" }}
          ></lord-icon>
          <span className="hidden text-sm text-[#3903DE] font-bold">Home</span>
        </Link>
        <button className="flex flex-col justify-center items-center [&>*:nth-child(2)]:hover:block">
          <lord-icon
            src="https://cdn.lordicon.com/diihvcfp.json"
            trigger="hover"
            colors="primary:#121331"
            state="hover"
            style={{ width: 36, height: 36, display: "block" }}
          ></lord-icon>
          <span className="hidden text-sm text-[#3903DE] font-bold">
            Send email
          </span>
        </button>
        <button className="flex flex-col justify-center items-center [&>*:nth-child(2)]:hover:block">
          <lord-icon
            src="https://cdn.lordicon.com/psnhyobz.json"
            trigger="hover"
            colors="primary:#121331"
            state="hover"
            style={{ width: 36, height: 36, display: "block" }}
          ></lord-icon>
          <span className="hidden text-sm text-[#3903DE] font-bold">
            Notifications
          </span>
        </button>
        <button className="flex flex-col justify-center items-center [&>*:nth-child(2)]:hover:block">
          <lord-icon
            src="https://cdn.lordicon.com/bhfjfgqz.json"
            trigger="hover"
            colors="primary:#121331"
            style={{ width: 36, height: 36, display: "block" }}
          ></lord-icon>
          <span className="hidden text-sm text-[#3903DE] font-bold">
            Profile
          </span>
        </button>
        <button className="flex flex-col justify-center items-center [&>*:nth-child(2)]:hover:block">
          <lord-icon
            src="https://cdn.lordicon.com/hwuyodym.json"
            trigger="hover"
            fill="black"
            colors="primary:#121331"
            state="hover-1"
            style={{ width: 36, height: 36, display: "block" }}
          ></lord-icon>
          <span className="hidden text-sm text-[#3903DE] font-bold">
            Settings
          </span>
        </button>
      </div>
    </nav>
  );
};
