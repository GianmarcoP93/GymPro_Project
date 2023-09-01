import { OrangeButton } from "./shared/OrangeButton";
import customize from "../assets/images/third-section/CustomizeIcon.png";
import manage from "../assets/images/third-section/ManageIcon.png";
import support from "../assets/images/third-section/SupportIcon.png";
import user from "../assets/images/third-section/UserIcon.png";

export const ThirdSection = () => {
  return (
    <div className="flex flex-col gap-20 items-center py-16 px-12 max-sm:py-10 max-md:gap-10 ">
      <div className="max-w-section flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl text-yellow-100 max-sm:leading-6 max-sm:text-lg max-landing-xs:text-xs font-bold">Chi siamo</h3>
        <p className="text-base text-white-100  text-center max-sm:text-sm max-landing-xs:text-2xs font-medium">
          Siamo dedicati a fornire un'esperienza semplice ed efficace.
          Attraverso la nostra piattaforma intuitiva, offriamo un processo di
          iscrizione agevole
        </p>
      </div>
      <div className="flex flex-between gap-20 text-white-100 max-sm:grid max-sm:gap-4 max-sm:w-full max-sm:grid-cols-2 max-md:grid max-md:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <img src={user} className="max-[1040px]:w-[80px]"/>
          <p className="max-sm:text-xs">Registrazione</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={customize} className="max-[1040px]:w-[80px]"/>
          <p className="max-sm:text-xs">Personalizzazione</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={manage} className="max-[1040px]:w-[80px] max-md:h-[80px]"/>
          <p className="max-sm:text-xs text-center">Gestione Piani e Tariffe</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={support} className="max-[1040px]:w-[80px]"/>
          <p className="max-sm:text-xs">Assistenza</p>
        </div>
      </div>
      <OrangeButton text="Iscriviti adesso" />
    </div>
  );
};
