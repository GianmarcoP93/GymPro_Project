import { OrangeButton } from "./shared/OrangeButton";
import customize from "../assets/images/third-section/CustomizeIcon.png";
import manage from "../assets/images/third-section/ManageIcon.png";
import support from "../assets/images/third-section/SupportIcon.png";
import user from "../assets/images/third-section/UserIcon.png";

export const ThirdSection = () => {
  return (
    <div className="flex flex-col gap-20 items-center py-16">
      <div className="max-w-section flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl text-yellow-100">Chi siamo</h3>
        <p className="text-base text-white-100 max-w-3xl text-center">
          Siamo dedicati a fornire un'esperienza semplice ed efficace.
          Attraverso la nostra piattaforma intuitiva, offriamo un processo di
          iscrizione agevole
        </p>
      </div>
      <div className="flex gap-20 text-white-100">
        <div className="flex flex-col items-center gap-4">
          <img src={user} />
          <p>Registrazione</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={customize} />
          <p>Personalizzazione</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={manage} />
          <p>Gestione Piani e Tariffe</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={support} />
          <p>Assistenza</p>
        </div>
      </div>
      <OrangeButton text="Iscriviti adesso" />
    </div>
  );
};
