import { useState } from "react";
import { SubscriptionInput } from "./SubscriptionInput";

export const UserSubscription = () => {
  const [user, setUser] = useState({
    username: "",
    subscription: "",
    card: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const today = new Date().toISOString().split("T")[0];

  const generatePassNumber = (len, arr) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    setUser((prevState) => {
      return {
        ...prevState,
        card: ans,
      };
    });
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
          value={user.name}
          onInput={handleInputChange}
          text="Nome utente*:"
        />

        <SubscriptionInput
          type="date"
          name="subscription"
          value={user.subscription}
          onInput={handleInputChange}
          mindate={today}
          text="Data iscrizione*:"
        />
        <SubscriptionInput
          type="text"
          name="card"
          value={user.card}
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
          value={user.email}
          onInput={handleInputChange}
          text="Email*:"
        />
        <SubscriptionInput
          type="tel"
          name="tel"
          value={user.phone}
          onInput={handleInputChange}
          text="Cellulare*:"
        />
      </div>
      <div></div>
    </div>
  );
};
