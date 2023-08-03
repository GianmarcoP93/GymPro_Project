import React from "react";
import YellowButton from "../Component/YellowButton";
import { Link } from "react-router-dom";
import clsx from "clsx";
import LogoGrande from "../assets/images/logo/LogoGrande.png";

const LoginPage = () => {
  const error = false;

  return (
    <div className="flex flex-col items-center pt-48">
      <div className="flex flex-row gap-40">
        <div className="flex flex-col gap-8">
          <div className="border border-solid border-white-100 rounded-xl w-96">
            <div className="pt-8 pb-6">
              <p className="flex justify-center text-yellow-100 font-bold font-roboto">
                Sign-In
              </p>
            </div>
            <div className="flex flex-col px-10 pb-5">
              <p className="flex justify-items-start text-yellow-200 pb-3 font-montserrat font-extralight">
                Email*
              </p>
              <input type="text" className="rounded-lg w h-8 pl-2" required />
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-200 pb-3 font-montserrat font-extralight">
                Password*
              </p>
              <input
                type="password"
                className={clsx(
                  "rounded-lg w h-8 pl-2",
                  error && "border border-red"
                )}
                required
              />
            </div>
            <Link className="flex text-white-100 pl-10 font-montserrat font-extralight hover:text-yellow-200">
              <span className="border-b">Password dimenticata?</span>
            </Link>
            <div className="flex justify-center pt-8 pb-14">
              <YellowButton text="Login" />
            </div>
          </div>
          <div className="flex flex-row justify-center py-6 border border-solid border-white-100 rounded-xl w-96 gap-2">
            <p className="flex justify-center text-white-100 font-montserrat font-extralight">
              Non hai un account?
            </p>
            <Link className=" font-semibold font-montserrat text-white-100 hover:text-yellow-200">
              <span className="border-b">Registrati</span>
            </Link>
          </div>
        </div>
        <div className="pt-10 w-full">
          <img src={LogoGrande} className="max-w-[440px] w-[440%]" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
