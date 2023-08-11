import { Sidebar } from "../Component/Sidebar";
import { Visualizzazione } from "../Component/Visualizzazione";
import { GestioneAccount } from "../Component/GestioneAccount";
import { PreferenzeAccount } from "../Component/PreferenzeAccount";
import { SettingsTitle } from "../Component/SettingsTitle";

export const Settings = () => {
  return (
    <>
      <div className="flex ">
        <div className="w-1 p-4 mt-4"></div>
        <Sidebar />
        <div className="flex flex-col w-full p-4">
          <div className="flex flex-col">
            <SettingsTitle />
            <PreferenzeAccount />
            <Visualizzazione />
            <GestioneAccount />
          </div>
        </div>
      </div>
    </>
  );
};
