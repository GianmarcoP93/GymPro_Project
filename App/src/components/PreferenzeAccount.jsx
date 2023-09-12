import React from "react";
import { ButtonSettings } from "./shared/ButtonSettings";
import { HeadingSettings } from "./shared/HeadingSettings";

export const PreferenzeAccount = () => {
  return (
    <div className="bg-gray text-secondary-300 rounded-md mb-6 max-w-section w-full mx-auto ">
      <HeadingSettings text="Informazioni profilo" />
      <ButtonSettings text="Dati utente" />
      <ButtonSettings text="Password" />
      <ButtonSettings text="Gestisci abbonamento" />
    </div>
  );
};
