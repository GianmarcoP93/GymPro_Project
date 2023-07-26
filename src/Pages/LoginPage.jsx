import React from "react";
import Button from "../Component/Button";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center pt-48">
            <div className="flex flex-row gap-40">
                <div className="flex flex-col gap-8">
                    <div className="border border-solid border-white-100 rounded-xl w-96">
                        <div className="pt-8 pb-6">
                            <p className="flex justify-center text-yellow-100 font-bold">Sign-In</p>
                        </div>
                        <div className="flex flex-col px-10 pb-5">
                            <p className="flex justify-items-start text-yellow-100 pb-3">Email*</p>
                            <input type="text" className="rounded-lg w h-8" />
                        </div>
                        <div className="flex flex-col px-10 pb-2">
                            <p className="flex justify-items-start text-yellow-100 pb-3">Password*</p>
                            <input type="text" className="rounded-lg w h-8" />
                        </div>
                        <a href="#" className="flex text-white-100 pl-10 underline">Password dimenticata?</a>
                        <div className="flex justify-center pt-8 pb-14"><Button /></div>
                    </div>
                    <div className="py-6 border border-solid border-white-100 rounded-xl w-96">
                        <p className="flex justify-center text-white-100">Non hai un account? .<a href="#" className="underline font-bold">Registrati</a></p>
                    </div>
                </div>
                <div className="pt-10 w-full"><img src="/src/assets/logo/Logo Grande.png" alt="img" className=" w-[404px]" /></div>
            </div>
            
        </div>
    )
}

export default LoginPage;