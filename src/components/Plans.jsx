import { InputRadio } from "./shared/InputRadio";

export const Plans = ({ state, setState }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, plan: { ...state.plan, [name]: value } });
  };

  return (
    <div className="border border-white-100 rounded-lg p-4 flex-grow">
      <h2 className="text-2xl text-secondary-100">Piano tariffario</h2>
      <div className="flex flex-col">
        <InputRadio
          text="Mensile"
          entrance={"3"}
          subscription={"20"}
          plan={"1-60"}
          cost={60}
          state={state}
          func={handleInputChange}
        />
        <InputRadio
          text="Trimestrale"
          entrance={"3"}
          subscription={"20"}
          plan={"3-160"}
          cost={160}
          state={state}
          func={handleInputChange}
        />
        <InputRadio
          text="Semestrale"
          entrance={"3"}
          subscription={"free"}
          plan={"6-280"}
          cost={280}
          state={state}
          func={handleInputChange}
        />
        <InputRadio
          text="Annuale"
          entrance={"5"}
          subscription={"free"}
          plan={"12-460"}
          cost={460}
          state={state}
          func={handleInputChange}
        />
      </div>
    </div>
  );
};
