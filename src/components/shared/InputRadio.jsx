export const InputRadio = ({
  text,
  entrance,
  subscription = "20",
  plan,
  func,
  cost,
  state,
}) => {
  console.log(state.plan.month_cost);
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white-100 font-semibold text-lg flex gap-[7px]">
          <input
            className="cursor-pointer"
            type="radio"
            name="month_cost"
            value={plan}
            onChange={func}
            required
            checked={state.plan.month_cost === plan}
          />
          {text}
        </p>
        <p className="pl-5 text-white-100">{entrance} ingressi a settimana</p>
        {subscription !== "free" ? (
          <p className="pl-5 text-secondary-100">{subscription}€ iscrizione</p>
        ) : (
          <p className="pl-5 text-secondary-100">Iscrizione gratuita</p>
        )}
      </div>
      <p className="text-secondary-100 text-xl font-semibold">{cost}€</p>
    </div>
  );
};
