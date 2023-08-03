import { OrangeButton } from "./OrangeButton";
import Bag from "../assets/images/hero-section/Bag.png";
import Bottle from "../assets/images/hero-section/Bottle.png";
import Carpet from "../assets/images/hero-section/Carpet.png";
import Clock from "../assets/images/hero-section/Clock.png";

export const HeroSection = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="max-w-section flex justify-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-2xl text-yellow-100">
            La soluzione completa per le palestre che desiderano avere una
            presenza online senza complicazioni.
          </h1>
          <p className="text-base text-white-100">
            Inizia subito e porta la tua palestra online. Iscriviti oggi stesso
            e scopri quanto sia facile creare la tua presenza digitale!
          </p>
          <OrangeButton text="Iscriviti adesso" />
        </div>
        <div className="relative py-20 ml-40">
          <img
            src={Bag}
            alt="Gym bag"
            className="relative z-10 animate__animated animate__bounce animate__slower animate__delay-0s animate__infinite"
          />
          <div className="absolute top-6 right-12">
            <img
              src={Bottle}
              alt="Bottle"
              className="animate__animated animate__bounce animate__slower animate__infinite animate__delay-1s"
            />
          </div>
          <div className="absolute bottom-6 left-0 z-0">
            <img src={Carpet} alt="Carpet" />
          </div>
          <div className="absolute top-24 left-0 z-20">
            <img
              src={Clock}
              alt="Clock"
              className="animate__animated animate__bounce animate__slower animate__infinite animate__delay-1s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
