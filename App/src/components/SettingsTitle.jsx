import React from "react";

export const SettingsTitle = ({ text }) => {
  return (
    <div className="flex justify-center text-3xl mb-6">
      <h2 className="text-secondary-100">{text}</h2>
    </div>
  );
};
