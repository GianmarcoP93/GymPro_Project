import { Visualizzazione } from "../components/Visualizzazione";
import { SettingsTitle } from "../components/SettingsTitle";
import { PreferenzeAccount } from "../components/PreferenzeAccount";
import { GestioneAccount } from "../components/GestioneAccount";
import { Sidebar } from "../components/shared/Sidebar";
import { useSelector } from "react-redux";

export const Settings = () => {
  const data = useSelector((state) => state.data.me);
  const loading = useSelector((state) => state.data.userLoading);

  return (
    <>
      {!loading && data && (
        <div className="flex p-6">
          <Sidebar isGym={data && data.role === "admin" ? true : false} />
          <div className="flex flex-col w-full  ">
            <div className="flex flex-col px-6 flex-1">
              <SettingsTitle text="Impostazioni" />
              <PreferenzeAccount />
              <Visualizzazione />
              <GestioneAccount />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
