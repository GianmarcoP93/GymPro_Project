import leftWeight from "../assets/images/fourth-section/LeftWeight.png";
import rightWeight from "../assets/images/fourth-section/RightWeight.png";
import coffee from "../assets/images/fourth-section/Coffee.png";
import heart from "../assets/images/fourth-section/heart.png";
import smile from "../assets/images/fourth-section/smile.png";
import weightIcon from "../assets/images/fourth-section/weightIcon.png";

export const FourthSection = () => {
  return (
    <div className="bg-primary py-16 flex justify-center">
      <div className="max-w-section relative py-52">
        <div className="absolute left-0 top-0 z-10">
          <img src={leftWeight} />
        </div>
        <div className="absolute right-0 top-0 z-10">
          <img src={rightWeight} />
        </div>
        <div className="relative flex items-center  justify-center bg-secondary-100 gap-32 p-20 z-20">
          <div className="flex flex-col items-center">
            <img src={smile} />
            <p>Clienti felici</p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <img src={coffee} />
            <p>Gestione Iscrizioni</p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <img src={weightIcon} />
            <p>Supporto Clienti</p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <img src={heart} />
            <p>User Friendly</p>
          </div>
        </div>
      </div>
    </div>
  );
};
