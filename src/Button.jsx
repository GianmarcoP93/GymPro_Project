import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({className}) => {

    return (
        <>
            <button className={twMerge("w-36 rounded-xl border border-solid border-black text-black bg-[#e5bb39]",className)} >Login</button>
        </>
    )
}

export default Button;