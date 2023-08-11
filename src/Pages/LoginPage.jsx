import React, { useState } from "react";
import YellowButton from "../Component/YellowButton";
import { Link } from "react-router-dom";
import { FormInputs } from "../components/shared/FormInputs";
import { SvgBigLogo } from "../components/shared/SvgBigLogo";
import { GymProText } from "../components/shared/GymProText";

const LoginPage = () => {

  const [login,setLogin] = useState({email:"",password:"",remember:false});
  
  
  const handleInputChange = (e) => {
    const {name,value,checked,type} = e.target 
    setLogin(prevState => {
      return {...prevState,[name]:type === "checkbox" ? checked : value}
    })
  }

  return (
    <div className="flex flex-col items-center h-full min-h-[100vh] justify-center sm:flex-col">
      <div className="flex flex-row items-center gap-10 max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <div className="flex flex-col gap-8 ">
          <div className="border border-solid border-white-100 rounded-xl ">
            <div className="pt-8 pb-6">
              <p className="flex justify-center text-yellow-100 font-bold font-roboto">
                Sign-In
              </p>
            </div>
            <div className="flex flex-col px-10 pb-5">
              <p className="flex justify-items-start text-yellow-200 pb-3 font-montserrat font-extralight">
                Email*
              </p>
              <FormInputs type="email" value={login.email} name="email" func={handleInputChange}/>
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-200 pb-3 font-montserrat font-extralight">
                Password*
              </p>
              <FormInputs type="password" value={login.password} name="password" func={handleInputChange}/>
            </div>
            <div className="flex flex-col pl-10 w-full">
              <div>
                <FormInputs type="checkbox" checked={login.remember} name="remember" func={handleInputChange}/>
                <span className="font-montserrat text-white-100 pl-1 font-extralight text-sm">
                  Resta connesso
                </span>
              </div>
              <div>
                <Link className="flex text-white-100 underline font-montserrat font-extralight pr-2 text-sm hover:text-yellow-200">
                  Password dimenticata?
                </Link>
              </div>
            </div>

            <div className="flex justify-center pt-8 pb-14">
              <YellowButton text="Login" />
            </div>
          </div>
          <div className="flex flex-row justify-center py-6 border border-solid border-white-100 rounded-xl w-96 gap-2">
            <p className="flex justify-center text-white-100 font-montserrat font-extralight">
              Non hai un account?
            </p>
            <Link
              to="/register"
              className=" font-semibold font-montserrat text-white-100 hover:text-yellow-200">
              <span className="border-b">Registrati</span>
            </Link>
          </div>
        </div>
        <div className="max-sm:max-w-[160px] max-sm:max-h-[160px]">
          <SvgBigLogo className="max-sm:max-w-[150px] max-sm:max-h-[150px]"/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
