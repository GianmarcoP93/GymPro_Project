import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PreferenzeAccount = () => {

  return (
    <div className="bg-gray text-secondary-300  py-2 outline-none rounded-md  mb-6  w-3/4 mx-auto ">
      <div className="text-secondary-100 semibold mb-2 text-left"></div>
      <h2 className="text-secondary-100 semibold mb-2 text-left  pl-3 ">
        Preferenze Account
      </h2>
      <hr className="my-2 mx-0 w-full  border-slate-300  " />
      <div className="flex items-center justify-between mb-2">
        <button className="text-white-100 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left">
          <span className="flex items-center justify-between">
            <p className="text-white-500 text-sm text-left font-thin font-montserrat hover:text-secondary-100 mb-0">
              Nome, località
            </p>
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              style={{ color: "#ffffff" }}
            />
          </span>
        </button>
      </div>
      <hr className="my-2 mx-0 w-full  border-slate-300" />
      <button className="text-white-100 hover:bg-gray-100  px-4 py-2 rounded-md w-full text-left mb-2">
        <span className="flex items-center justify-between">
          <p className="text-white-500 text-sm text-left font-thin font-montserrat hover:text-secondary-100 mb-0">
            La tua sottoscrizione
          </p>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            style={{ color: "#ffffff" }}
          />
        </span>
      </button>
      <hr className="my-1 mx-0 w-full -  border-slate-300  " />

      <button className="text-white-100 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left">
        <span className="flex items-center justify-between">
          <p className="text-gray-500 text-sm text-left font-thin font-montserrat hover:text-secondary-100 mb-0">
            Informazioni di accesso
          </p>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            style={{ color: "#ffffff" }}
          />
        </span>
      </button>
    </div>
  );
};
