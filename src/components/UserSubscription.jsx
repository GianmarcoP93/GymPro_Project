import { SubscriptionInput } from "./shared/SubscriptionInput";

export const UserSubscription = ({ state, setState }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const today = new Date().toISOString().split("T")[0];

  const generatePassNumber = (len, arr) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    setState({ ...state, passNumber: ans });
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
          value={state.username}
          onInput={handleInputChange}
          text="Nome utente*:"
        />

        <SubscriptionInput
          type="date"
          name="subscription"
          value={state.subscription}
          onInput={handleInputChange}
          mindate={today}
          text="Data iscrizione*:"
        />
        <SubscriptionInput
          type="text"
          name="passNumber"
          value={state.passNumber}
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
          value={state.email}
          onInput={handleInputChange}
          text="Email*:"
        />
        <SubscriptionInput
          type="tel"
          name="tel"
          value={state.tel}
          onInput={handleInputChange}
          text="Cellulare*:"
        />
      </div>
    </div>
  );
};
