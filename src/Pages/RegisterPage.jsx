import React, { useEffect, useState } from "react";
import YellowButton from "../components/shared/YellowButton";
import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../components/shared/FormInputs";
import { SvgBigLogo } from "../components/shared/SvgBigLogo";
import { ToastContainer, toast } from "react-toastify";
import { serverURL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { adminLogin } from "../store/authSlice";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
    role: "admin",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  const notifyError = (error) => {
    toast.error(error, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError(null);
      const response = await axios({
        url: `${serverURL}/api/admins/register`,
        method: "POST",
        data: form,
        headers: { "Content-Type": "application/json" },
      });

      setForm({
        company: "",
        email: "",
        password: "",
        confirmPassword: "",
        remember: false,
        role: "admin",
      });

      const {
        data: {
          token,
          admin: { _id: id },
        },
      } = response;

      dispatch(adminLogin({ token, id }));
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error);
      notifyError(error?.response?.data?.message);
    }
  };

  return (
    <>
      <ToastContainer
        toastStyle={{
          backgroundColor: error ? "red" : "#F87A2C",
        }}
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="flex flex-col items-center justify-center h-full min-h-[100vh]">
        <div className="flex flex-row gap-40 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-10">
          <div className="flex flex-col gap-8">
            <div className="border border-solid border-white-100 rounded-xl">
              <div className="pt-8 pb-6">
                <p className="flex justify-center text-yellow-100 font-bold font-roboto">
                  Sign-Up
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col px-10 pb-2">
                  <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                    Azienda*
                  </p>
                  <FormInputs
                    type="text"
                    value={form.company}
                    func={handleInputChange}
                    name="company"
                  />
                </div>
                <div className="flex flex-col px-10 pb-2">
                  <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                    Email*
                  </p>
                  <FormInputs
                    type="email"
                    value={form.email}
                    func={handleInputChange}
                    name="email"
                  />
                </div>
                <div className="flex flex-col px-10 pb-2">
                  <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                    Crea Password*
                  </p>
                  <FormInputs
                    type="password"
                    value={form.password}
                    func={handleInputChange}
                    name="password"
                  />
                </div>
                <div className="flex flex-col px-10 pb-2">
                  <p className="flex justify-items-start text-yellow-200 pb-2 font-montserrat font-extralight">
                    Conferma Password*
                  </p>
                  <FormInputs
                    type="password"
                    value={form.confirmPassword}
                    func={handleInputChange}
                    name="confirmPassword"
                  />
                </div>
                <div className="gap-2 flex text-white-100 pl-10 font-montserrat font-extralight hover:text-yellow-200">
                  <FormInputs
                    type="checkbox"
                    checked={form.remember}
                    name="remember"
                    func={handleInputChange}
                    required={true}
                  />
                  <span className="border-b ">
                    Accetta termini e condizioni
                  </span>
                </div>
                <div className="flex justify-center pt-8 pb-14">
                  <YellowButton text="Registrati" />
                </div>
              </form>
            </div>
            <div className="flex flex-row justify-center py-6 border border-solid border-white-100 rounded-xl w-96 gap-2">
              <p className="flex justify-center text-white-100 font-montserrat font-extralight">
                Sei già registrato?
              </p>
              <Link
                to="/login"
                className=" font-semibold font-montserrat text-white-100 hover:text-yellow-200"
              >
                <span className="border-b">Accedi</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <SvgBigLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
