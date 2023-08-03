import React, { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import handleIconClick from "./handleIconClick";

const SettingsSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
    <div className="bg-bgwhite min-h-screen flex items-center justify-center ">
      <div className="flex flex-col space-y-4 ">
        <div className="bg-white p-6 rounded-xl shadow-md min-w-96  border-lightgray">
          <h2 className="text-lg font-semibold mb-4 text-left">
            Preferenze Account
          </h2>
          <div className="flex items-center justify-between">
            <button
              className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left"
              onClick={() => handleIconClick(menuOpen, setMenuOpen)}
            >
              <span className="flex items-center">
                <p className="text-gray-500 text-sm text-left font-thin">
                  Nome, località
                </p>
                <ArrowIcon className="ml-2" />
              </span>
            </button>
          </div>
          <button className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left ">
            <p className="text-gray-500 text-sm text-left font-thin">
              La tua sottoscrizione
            </p>
          </button>
          {menuOpen && (
            <div className="mt-4 bg-white p-4 rounded-md shadow-md border-lightgray">
              <p className="text-gray-500 text-sm text-left font-thin">
                Vaglio Basilicata
              </p>
              <p className="text-gray-500 text-sm text-left font-thin">
                Cap: 85010
              </p>
              <p className="text-gray-500 text-sm text-left font-thin">
                Italia
              </p>
            </div>
          )}
          <button className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full  text-left">
            <p className="text-gray-500 text-sm text-left font-thin">
              Informazioni di accesso
            </p>
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md min-w-96  border-lightgray">
          <h2 className="text-lg font-semibold mb-4 text-left">
            Visualizzazione
          </h2>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-5" />
            <h2 className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left">
              <p className="text-gray-500 text-sm text-left font-thin">
                Modalità Scura
              </p>
            </h2>
          </label>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md min-w-96  border-lightgray">
          <h2 className="text-lg font-semibold mb-4 text-left">
            Gestione Account
          </h2>
          <button className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left">
            <p className="text-gray-500 text-sm text-left font-thin">
              Impostazioni Account
            </p>
          </button>
          <button className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full  text-left">
            <p className="text-gray-500 text-sm text-left font-thin">
              Sospendi Account
            </p>
          </button>
          <button className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md w-full  text-left">
            <p className="text-gray-500 text-sm text-left font-thin">
              Chiudi Account
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
