import React from "react";
import { TitleCard } from "../components/shared/TitleCard";
import { ButtonCloseWindow } from "../components/shared/ButtonCloseWindow";
import { OrangeButton } from "../components/shared/OrangeButton";

export const ModalProfiloAdmin = () => {
  return (
    <>
      <div className="flex flex-col gap-10 max-h-[100vh] mx-5  ">
        <ButtonCloseWindow />
        <TitleCard text="Nuova scheda" />
        <div className="flex font-montserrat"></div>

        <div className="bg-white-00 border border-slate-300 rounded-xl w-full mx-auto bg-gray ">
          <table className="w-full ">
            <thead>
              <tr className="border-b border-slate-300 text-secondary-100 font-roboto font-bold text-xl">
                <th className="py-5 w-1/5 ">Giorno 1 esercizi</th>
                <th className="w-1/5">Set</th>
                <th className="w-1/5">Ripetizioni</th>
                <th className="w-1/5">Rec</th>
                <th className="w-1/5">Kg</th>
              </tr>
            </thead>
            <tbody className="w-full font-montserrat">
              <tr>
                <td className="pl-20 py-5 w-1/5">
                  <select className="rounded-md pl-1">
                    <option>Seleziona esercizio</option>
                  </select>
                </td>
                <td className="pl-24 w-1/5">
                  <input
                    className="rounded-md pl-1"
                    placeholder="Inserisci set"
                  />
                </td>
                <td className="pl-24 w-1/5">
                  <input
                    className="rounded-md pl-1"
                    placeholder="Inserisci ripetizioni"
                  />
                </td>
                <td className="pl-28 w-1/5">
                  <select className="rounded-md pl-1">
                    <option>Seleziona rec</option>
                    <option>30'</option>
                    <option>60'</option>
                    <option>90'</option>
                  </select>
                </td>
                <td className="pl-24 w-1/5">
                  <input
                    className="rounded-md pl-1"
                    placeholder="Inserisci kg"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-row-reverse w-full">
          <button className="border rounded-lg py-1 px-1 border-slate-300 text-white-100 font-montserrat font-normal bg-gray">
            Aggiungi esercizio{" "}
          </button>
        </div>
        <div className="flex flex-row-reverse">
          <OrangeButton type="submit" text="Salva" className="" />
        </div>
      </div>
    </>
  );
};
