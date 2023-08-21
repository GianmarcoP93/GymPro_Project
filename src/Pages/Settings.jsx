import { Visualizzazione } from "../components/Visualizzazione";
import { SettingsTitle } from "../components/SettingsTitle";
import { PreferenzeAccount } from "../components/PreferenzeAccount";
import { GestioneAccount } from "../components/GestioneAccount";
import { Sidebar } from "../components/shared/Sidebar";

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
