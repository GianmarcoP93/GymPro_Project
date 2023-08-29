import React from "react";
import Home from "../../assets/images/ResponsiveNavbar/Home1.png";
import Scheda from "../../assets/images/ResponsiveNavbar/Scheda.png";
import Impostazioni from "../../assets/images/ResponsiveNavbar/Impostazioni.png";
import Profilo from "../../assets/images/ResponsiveNavbar/Profile.png";

const ResponsiveNavbar = () => {
  return (
    <nav className="block bg-gray sticky bottom-0 left-0 right-0 top-0 dashboard:hidden">
      <div className="py-4 flex  justify-evenly">
        <button>
          <img src={Home} className="block" />
        </button>
        <button>
          <img src={Scheda} className="block" />
        </button>
        <button>
          <img src={Impostazioni} className="block" />
        </button>
        <button>
          <img src={Profilo} className="block" />
        </button>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
