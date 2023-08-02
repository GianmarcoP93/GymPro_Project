import { OrangeButton } from "../Component/OrangeButton";
import { Plans } from "../Component/Plans";
import { ProfileDescription } from "../Component/ProfileDescription";
import { Sidebar } from "../Component/Sidebar";
import { UserBmiChart } from "../Component/UserBmiChart";
import { UserSubscription } from "../Component/UserSubscription";

export const AdminDashboard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("a");
  };

  return (
    <div className="flex p-6 gap-10">
      <Sidebar name="FlowGym" email="Flowgym@gmail.com" />
      <div className="flex flex-col flex-grow max-w-section gap-4 mx-auto">
        <ProfileDescription
          name="FlowGym"
          email="Flowgym@gmail.com"
          address="Via Pierre de Coubertin, 4, 20100 Milano MI"
          isGym={true}
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-10 rounded-2xl bg-gray gap-4"
        >
          <div className="flex justify-between gap-32">
            <UserSubscription />
            <Plans />
          </div>
          <OrangeButton
            text="Aggiungi utente"
            twProp="self-end"
            type="submit"
          />
        </form>
        <UserBmiChart />
      </div>
    </div>
  );
};
