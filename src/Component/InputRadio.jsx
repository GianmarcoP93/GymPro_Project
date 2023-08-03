import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/userSlice";

export const InputRadio = ({ text, entrance, subscription = "20", cost }) => {
  const post = useSelector((state) => state.user.post);
  const dispatch = useDispatch();

  const stringValue = typeof cost === "number" ? String(cost) : cost;

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    dispatch(setPost({ ...post, [name]: value }));
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <label
          htmlFor={subscription}
          className="text-white-100 font-semibold text-lg flex gap-[7px]"
        >
          <input
            className="cursor-pointer"
            type="radio"
            name="plan"
            value={stringValue}
            onChange={handleRadioChange}
            required
          />
          {text}
        </label>
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
