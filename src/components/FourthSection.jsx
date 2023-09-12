import leftWeight from "../assets/images/fourth-section/LeftWeight.png";
import rightWeight from "../assets/images/fourth-section/RightWeight.png";
import coffee from "../assets/images/fourth-section/Coffee.png";
import heart from "../assets/images/fourth-section/heart.png";
import smile from "../assets/images/fourth-section/smile.png";
import weightIcon from "../assets/images/fourth-section/weightIcon.png";

export const FourthSection = () => {
  return (
    <div className="py-16 px-12 flex justify-center w-full max-sm:py-8">
      <div className="max-w-section w-full relative py-52 max-sm:pt-24 max-sm:pb-0 max-sm:max-w-[350px]">
        <div className="absolute left-[-44px] top-0 z-10 max-sm:w-[150px] max-sm:left-[-30px] ">
          <img src={leftWeight} />
        </div>
        <div className="absolute right-[-44px] top-0 z-10 max-sm:w-[150px] max-sm:right-[-30px] ">
          <img src={rightWeight} />
        </div>
        <div className="relative flex items-center justify-between flex-1 bg-secondary-100 p-20 z-20 max-sm:grid max-sm:grid-cols-2 max-sm:p-7 max-sm:w-full max-sm:gap-8">
          <div className="flex flex-col items-center">
            <img src={smile} />
            <p className="text-center">Clienti felici</p>
          </div>
          <div className="flex flex-col items-center w-fit max-sm:pt-5">
            <img src={coffee} />
            <p className="text-center">Gestione Iscrizioni</p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <img src={weightIcon} />
            <p className="text-center">Supporto Clienti</p>
          </div>
          <div className="flex flex-col items-center w-fit max-sm:justify-center">
            <img src={heart} />
            <p className="text-center">User Friendly</p>
          </div>
        </div>
      </div>
    </div>
  );
};
