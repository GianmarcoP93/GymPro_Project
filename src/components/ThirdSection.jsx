import { OrangeButton } from "./shared/OrangeButton";
import customize from "../assets/images/third-section/CustomizeIcon.png";
import manage from "../assets/images/third-section/ManageIcon.png";
import support from "../assets/images/third-section/SupportIcon.png";
import user from "../assets/images/third-section/UserIcon.png";

export const ThirdSection = () => {
  return (
    <div className="flex flex-col gap-20 items-center py-16 max-sm:px-4 max-sm:py-10 max-sm:gap-10">
      <div className="max-w-section flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl text-yellow-100 ">Chi siamo</h3>
        <p className="text-base text-white-100 max-w-3xl text-center max-sm:text-sm">
          Siamo dedicati a fornire un'esperienza semplice ed efficace.
          Attraverso la nostra piattaforma intuitiva, offriamo un processo di
          iscrizione agevole
        </p>
      </div>
      <div className="flex gap-20 text-white-100 max-sm:grid max-sm:gap-4 max-sm:w-full max-sm:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <img src={user} className="max-sm:w-[80px]"/>
          <p className="max-sm:text-xs">Registrazione</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={customize} className="max-sm:w-[80px]"/>
          <p className="max-sm:text-xs">Personalizzazione</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={manage} className="max-sm:w-[80px] max-sm:h-[80px]"/>
          <p className="max-sm:text-xs">Gestione Piani e Tariffe</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={support} className="max-sm:w-[80px]"/>
          <p className="max-sm:text-xs">Assistenza</p>
        </div>
      </div>
      <OrangeButton text="Iscriviti adesso" />
    </div>
  );
};
