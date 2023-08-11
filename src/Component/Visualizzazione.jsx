import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Visualizzazione = () => {
  return (
    <div className="bg-gray text-secondary-300 py-2 outline-none rounded-md mb-6 w-3/4 mx-auto">
      <h2 className="text-secondary-100 semibold mb-2 text-left  pl-3">
        Visualizzazione
      </h2>
      <div className="w-full bg-slate-300 h-px mb-2 items-start"></div>
      <div className="flex flex-col gap-1">
        <button className="text-white-100 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left ">
          <span className="flex items-center justify-between">
            <p className="text-white-500 text-sm text-left font-thin font-montserrat hover:text-secondary-100 mb-0">
              Modalità Scura
            </p>
            <FontAwesomeIcon
              icon={["fas", "arrow-right"]}
              style={{ color: "#ffffff" }}
            />
          </span>
        </button>
      </div>
    </div>
  );
};
