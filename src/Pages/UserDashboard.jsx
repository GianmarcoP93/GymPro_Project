import { useSelector } from "react-redux";
import { ProfileDescription } from "../components/shared/ProfileDescription";
import { Sidebar } from "../components/shared/Sidebar";
import { UserBmiChart } from "../components/UserBmiChart";

export const UserDashboard = () => {
  const data = useSelector((state) => state.data.me);
  const loading = useSelector((state) => state.data.userLoading);

  return (
    <>
      {!loading && data && (
        <div className="flex p-6 gap-6 min-h-[100vh] h-full">
          <Sidebar name={data.username} email={data.email} isGym={false} />
          <div className="flex flex-col flex-grow max-w-section justify-between gap-4 mx-auto">
            <ProfileDescription
              name={data.username}
              email={data.email}
              subscription={new Date(
                data && data.subscriptionExp
              ).toLocaleDateString()}
              isGym={false}
              tel={data.tel}
            />

            <UserBmiChart />
          </div>
        </div>
      )}
    </>
  );
};
