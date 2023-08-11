import React, { useState } from "react";
import YellowButton from "../Component/YellowButton";
import { Form, Link } from "react-router-dom";
import { FormInputs } from "../components/shared/FormInputs";
import { SvgBigLogo } from "../components/shared/SvgBigLogo";

const RegisterPage = () => {
  const [register,setRegister] = useState({company:"",email:"",password:"",confirmPassword:"",remember:false});
  
  console.log(register)

  const handleInputChange = (e) => {
    const {name,value,checked,type} = e.target 
    console.log(type,checked,name,value)
    setRegister(prevState => {
      return {...prevState,[name]:type === "checkbox" ? checked : value}
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[100vh]">
      <div className="flex flex-row max-sm:flex max-sm:flex-col gap-10">
        <div className="flex flex-col gap-8">
          <div className="border border-solid border-white-100 rounded-xl">
            <div className="pt-8 pb-6">
              <p className="flex justify-center text-yellow-100 font-bold font-roboto">
                Sign-Up
              </p>
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                Azienda*
              </p>
              <FormInputs type="text" value={register.company} func={handleInputChange} name="company"/>
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                Email*
              </p>
              <FormInputs type="email" value={register.email} func={handleInputChange} name="email"/>
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                Crea Password*
              </p>
              <FormInputs type="password" value={register.password} func={handleInputChange} name="password"/>
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                Conferma Password*
              </p>
              <FormInputs type="password" value={register.confirmPassword} func={handleInputChange} name="confirmPassword"/>
            </div>
            <div className="gap-2 flex text-white-100 pl-10 font-montserrat font-extralight hover:text-yellow-200">
              <FormInputs type="checkbox" checked={register.remember} name="remember" func={handleInputChange}/>
              <span className="border-b ">Accetta termini e condizioni</span>
            </div>
            <div className="flex justify-center pt-8 pb-14">
              <YellowButton text="Registrati" />
            </div>
          </div>
          <div className="flex flex-row justify-center py-6 border border-solid border-white-100 rounded-xl w-full gap-2">
            <p className="flex justify-center text-white-100 font-montserrat font-extralight">
              Sei già registrato?
            </p>
            <Link className=" font-semibold font-montserrat text-white-100 hover:text-yellow-200">
              <span className="border-b">Accedi</span>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <SvgBigLogo className="max-sm:max-w-[150px] max-sm:max-h-[150px]"/>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
