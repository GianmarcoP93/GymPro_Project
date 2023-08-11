import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GestioneAccount = () => {
  return (
    <div className="bg-gray text-secondary-300  py-2 outline-none rounded-md  w-3/4 mx-auto">
      <h2 className="text-secondary-100 font-semibold mb-4 text-left  pl-3">
        Gestione Account
      </h2>
      <hr className="my-2 mx-0 w-full  border-slate-300" />
      <div className="flex flex-col space-y-2">
        <button className="text-white-100 hover:bg-gray-100 px-4 py-2 rounded-md w-full flex items-center justify-between">
          <p className="text-white-500 text-sm font-thin hover:text-secondary-100">
            Impostazioni Account
          </p>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            style={{ color: "#ffffff" }}
          />
        </button>
        <hr className="my-2 mx-0 w-full  border-slate-300" />
        <button className="text-white-100 hover:bg-gray-100 px-4 py-2 rounded-md w-full flex items-center justify-between">
          <p className="text-gray-500 text-sm font-thin hover:text-secondary-100">
            Sospendi Account
          </p>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            style={{ color: "#ffffff" }}
          />
        </button>
        <hr className="my-2 mx-0 w-full  border-slate-300" />
        <button className="text-white-100 hover:bg-gray-100 px-4 py-2 rounded-md w-full flex items-center justify-between hover:text-red-600">
          <p className="text-gray-500 text-sm font-thin">Chiudi Account</p>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            className="text-red-700 hover:text-red-600"
          />
        </button>
      </div>
    </div>
  );
};
