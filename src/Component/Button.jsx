import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({className}) => {

    return (
        <>
            <button className={twMerge("w-36 rounded-xl border border-solid border-black text-black bg-yellow-100 font-roboto font-medium hover:bg-yellow-200",className)} >Login</button>
        </>
    )
}

export default Button;