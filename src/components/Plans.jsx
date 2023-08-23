import { InputRadio } from "./shared/InputRadio";

export const Plans = ({ state, setState }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="border border-white-100 rounded-lg p-4 flex-grow">
      <h2 className="text-2xl text-secondary-100">Piano tariffario</h2>
      <div className="flex flex-col">
        <InputRadio
          text="Mensile"
          entrance={"3"}
          subscription={"20"}
          cost={60}
          func={handleInputChange}
        />
        <InputRadio
          text="Trimestrale"
          entrance={"3"}
          subscription={"20"}
          cost={160}
          func={handleInputChange}
        />
        <InputRadio
          text="Semestrale"
          entrance={"3"}
          subscription={"free"}
          cost={280}
          func={handleInputChange}
        />
        <InputRadio
          text="Annuale"
          entrance={"5"}
          subscription={"free"}
          cost={460}
          func={handleInputChange}
        />
      </div>
    </div>
  );
};
