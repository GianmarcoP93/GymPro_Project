import { SubscriptionInput } from "./SubscriptionInput";
import { useDispatch, useSelector } from "react-redux";
import { setPost, updateUserSub } from "../store/userSlice";

export const UserSubscription = () => {
  const post = useSelector((state) => state.user.post);
  const dispatch = useDispatch();

  const handleSubSubmit = () => {
    dispatch(updateUserSub(post))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPost({ ...post, [name]: value }));
  };
  const today = new Date().toISOString().split("T")[0];

  const generatePassNumber = (len, arr) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    dispatch(setPost({ ...post, passNumber: ans }));
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col gap-8">
        <p className="text-secondary-100 font-bold text-2xl">
          Iscrizione utente
        </p>

        <SubscriptionInput
          type="text"
          name="username"
          placeholder="Mario Rossi"
          value={post.username}
          onInput={handleInputChange}
          text="Nome utente*:"
        />

        <SubscriptionInput
          type="date"
          name="subscription"
          value={post.subscription}
          onInput={handleInputChange}
          mindate={today}
          text="Data iscrizione*:"
        />
        <SubscriptionInput
          type="text"
          name="passNumber"
          value={post.passNumber}
          onInput={handleInputChange}
          text="Numero tessera*:"
          isButton={true}
          clickfunc={() =>
            generatePassNumber(10, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
          }
        />
        <SubscriptionInput
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={post.email}
          onInput={handleInputChange}
          text="Email*:"
        />
        <SubscriptionInput
          type="tel"
          name="tel"
          value={post.tel}
          onInput={handleInputChange}
          text="Cellulare*:"
        />
      </div>
      <div>
        <button onClick={handleSubSubmit}>Invia abbonamento</button>
      </div>
    </div>
  );
};
