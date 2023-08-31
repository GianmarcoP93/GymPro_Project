import React from "react";
import { ButtonSettings } from "./shared/ButtonSettings";
import { HeadingSettings } from "./shared/HeadingSettings";

export const Visualizzazione = () => {
  return (
    <div className="bg-gray text-secondary-300 rounded-md mb-6 max-w-section w-full mx-auto">
      <HeadingSettings text="Visualizzazione" />
      <ButtonSettings text="Modalità chiara" />
    </div>
  );
};
