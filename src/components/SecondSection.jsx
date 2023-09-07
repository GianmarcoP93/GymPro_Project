import SecondImage from "../assets/images/second-section/SecondImage.png"

export const SecondSection = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="px-12 max-w-section gap-8 flex justify-center items-center">
        <div className="relative max-[380px]:hidden">
          <img src={SecondImage} alt="Weight bench" className="relative z-10 " />
        </div>
        <div className="flex flex-col justify-center gap-4 max-landing-xs:gap-0">
          <h1 className="text-2xl text-yellow-100  max-sm:leading-6 max-sm:text-lg max-landing-xs:text-xs font-bold">
            Ricevi e gestisci le iscrizioni dei tuoi clienti direttamente attraverso la piattaforma.
          </h1>
          <p className="text-base text-white-100 max-sm:text-sm max-landing-xs:text-2xs font-medium">
            Inoltre, il nostro sistema ti permette di tenere traccia delle scadenze degli abbonamenti e gestire eventuali rinnovi in modo efficiente.
          </p>
        </div>
      </div>
    </div>
  );
};
