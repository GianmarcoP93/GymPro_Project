import { ProfileDescription } from "../Component/ProfileDescription";
import { Sidebar } from "../Component/Sidebar";
import { UserBmiChart } from "../Component/UserBmiChart";

export const UserDashboard = () => {
  return (
    <>
      <div className="flex p-6 gap-6 min-h-[100vh] h-full">
        <Sidebar
          name="Antonino Alampi"
          email="Alampiantonino99@gmail.com"
          isGym={false}
        />
        <div className="flex flex-col flex-grow max-w-section justify-between gap-8 mx-auto">
          <ProfileDescription
            name="Antonino Alampi"
            email="Alampiantonino99@gmail.com"
            address="Via Pierre de Coubertin, 4, 20100 Milano MI"
            workoutPlan="20/11/2023"
            subscription="20/10/2023"
            isGym={false}
          />

          <UserBmiChart />
        </div>
      </div>
    </>
  );
};
