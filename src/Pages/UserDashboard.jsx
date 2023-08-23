import { ProfileDescription } from "../components/shared/ProfileDescription";
import { Sidebar } from "../components/shared/Sidebar";
import { UserBmiChart } from "../components/UserBmiChart";
import { serverURL } from "../constants/constants";
import { useAxios } from "../hooks/useAxios";
import { internalMemory } from "../utility/internalMemory.mjs";

export const UserDashboard = () => {
  const user = internalMemory.get("user");

  const { data } = useAxios(`${serverURL}/api/users/getUser?id=${user}`);

  let date = new Date(data && data.subscription);

  switch (data && data.plan) {
    case "60":
      date.setMonth(date.getMonth() + 1);
      break;
    case "160":
      date.setMonth(date.getMonth() + 3);
      break;
    case "280":
      date.setMonth(date.getMonth() + 6);
      break;
    case "460":
      date.setMonth(date.getMonth() + 12);
      break;
  }

  date = date.toLocaleDateString();

  return (
    <>
      {data && (
        <div className="flex p-6 gap-6 min-h-[100vh] h-full">
          <Sidebar name={data.username} email={data.email} isGym={false} />
          <div className="flex flex-col flex-grow max-w-section justify-between gap-4 mx-auto">
            <ProfileDescription
              name={data.username}
              email={data.email}
              subscription={date}
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
