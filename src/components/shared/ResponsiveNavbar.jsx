import React from "react";
import Home from '../../assets/images/ResponsiveNavbar/Home1.png'
import Scheda from '../../assets/images/ResponsiveNavbar/Scheda.png'
import Impostazioni from '../../assets/images/ResponsiveNavbar/Impostazioni.png'
import Profilo from '../../assets/images/ResponsiveNavbar/Profile.png'

const ResponsiveNavbar = () => {
    return(
        <nav className="max-sm:bg-[#393B44] max-sm:fixed max-sm:bottom-0 max-sm:w-full">
            <div className="max-sm:py-8 max-sm:flex max-sm:flex-row max-sm:place-content-evenly">
                <button><img src={Home} /></button>
                <button><img src={Scheda} /></button>
                <button><img src={Impostazioni} /></button>
                <button><img src={Profilo} /></button>
            </div>
        </nav>
    )
}

export default ResponsiveNavbar;