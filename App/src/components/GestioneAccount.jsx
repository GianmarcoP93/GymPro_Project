import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeadingSettings } from "./shared/HeadingSettings";
import { ButtonSettings } from "./shared/ButtonSettings";

export const GestioneAccount = () => {
  return (
    <div className="bg-gray  rounded-md mb-6 max-w-section w-full mx-auto">
      <HeadingSettings text="Gestione account" />
      <ButtonSettings text="Autenticazione" />
      <ButtonSettings text="Gestione delle Autorizzazioni" />
      <ButtonSettings text="Impostazioni di Privacy" />
      <ButtonSettings text="Politica sulla Privacy" />
      <ButtonSettings text="Cancellazione dell'Account" isRed />
    </div>
  );
};
