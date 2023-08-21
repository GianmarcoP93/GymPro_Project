import { InputRadio } from "./shared/InputRadio";

export const Plans = () => {
  return (
    <div className="border border-white-100 rounded-lg p-4 flex-grow">
      <h2 className="text-2xl text-secondary-100">Piano tariffario</h2>
      <div className="flex flex-col">
        <InputRadio
          text="Mensile"
          entrance={"3"}
          subscription={"20"}
          cost={60}
        />
        <InputRadio
          text="Trimestrale"
          entrance={"3"}
          subscription={"20"}
          cost={160}
        />
        <InputRadio
          text="Semestrale"
          entrance={"3"}
          subscription={"free"}
          cost={280}
        />
        <InputRadio
          text="Annuale"
          entrance={"5"}
          subscription={"free"}
          cost={460}
        />
      </div>
    </div>
  );
};
