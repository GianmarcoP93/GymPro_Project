import React, { useEffect, useState } from "react";
import YellowButton from "../components/shared/YellowButton";
import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../components/shared/FormInputs";
import { SvgBigLogo } from "../components/shared/SvgBigLogo";
import { useAxios } from "../hooks/useAxios";
import { adminLogin, login } from "../store/userSlice";
import { serverURL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const { error, update, data, setError } = useAxios(`${serverURL}/api/login`, {
    method: "POST",
    data: form,
    headers: { "Content-Type": "application/json" },
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(null);

      await update();

      setForm({ email: "", password: "", remember: false });
    } catch (error) {}
  };

  const notifyError = () => {
    toast.error(error && error.message, {
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

  const notifySuccess = () => {
    toast.success("Login effettuato!", {
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

  useEffect(() => {
    if (error) {
      notifyError();
    }
    if (data && !error) {
      notifySuccess();

      const token = data.token;

      const id = data._id;
      if (data.role === "user") {
        dispatch(login({ token, id }));
        navigate("/user");
      } else {
        dispatch(adminLogin({ token, id }));
        navigate("/admin/dashboard");
      }
    }
  }, [error, data]);

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
      <div className="flex flex-col items-center h-full min-h-[100vh] justify-center">
        <div className="flex flex-row items-center gap-40">
          <div className="flex flex-col gap-8">
            <div className="border border-solid border-white-100 rounded-xl px-10 pt-8 pb-14">
              <div className="pb-6">
                <p className="flex justify-center text-yellow-100 font-bold font-roboto">
                  Sign-In
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col pb-5">
                  <p className="flex justify-items-start text-yellow-200 pb-3 font-montserrat font-extralight">
                    Email*
                  </p>
                  <FormInputs
                    type="email"
                    value={form.email}
                    name="email"
                    func={handleInputChange}
                    required={true}
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <p className="flex justify-items-start text-yellow-200 pb-3 font-montserrat font-extralight">
                    Password*
                  </p>
                  <FormInputs
                    type="password"
                    value={form.password}
                    name="password"
                    func={handleInputChange}
                    required={true}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div>
                    <FormInputs
                      type="checkbox"
                      checked={form.remember}
                      name="remember"
                      func={handleInputChange}
                      required={false}
                    />
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

                <div className="flex justify-center pt-8">
                  <YellowButton text="Login" />
                </div>
              </form>
            </div>
            <div className="flex flex-row justify-center py-6 border border-solid border-white-100 rounded-xl w-96 gap-2">
              <p className="flex justify-center text-white-100 font-montserrat font-extralight">
                Non hai un account?
              </p>
              <Link
                to="/register"
                className=" font-semibold font-montserrat text-white-100 hover:text-yellow-200"
              >
                <span className="border-b">Registrati</span>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <SvgBigLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
