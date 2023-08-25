import { useSelector } from "react-redux";
import { OrangeButton } from "../components/shared/OrangeButton";
import { Plans } from "../components/Plans";
import { ProfileDescription } from "../components/shared/ProfileDescription";
import { Sidebar } from "../components/shared/Sidebar";
import { UserSubscription } from "../components/UserSubscription";
import { useAxios } from "../hooks/useAxios";
import { serverURL } from "../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import AdminChart from "../components/AdminChart";

export const AdminDashboard = () => {
  const token = useSelector((state) => state.user.adminToken);
  const id = useSelector((state) => state.user.adminId);

  const { data: allUsers, loading: listLoading } = useAxios(
    `${serverURL}/api/admins/usersList/${id}`,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  const { data, loading } = useAxios(`${serverURL}/api/admins/getAdmin`, {
    headers: { authorization: `Bearer ${token}` },
  });

  const [form, setForm] = useState({
    username: "",
    subscription: "",
    passNumber: "",
    email: "",
    tel: "",
    plan: {
      month_cost: "",
      months: "",
      cost: "",
    },
    role: "user",
    gym: id,
    card: {
      expiry: "",
    },
    subscriptionExp: "",
  });
  console.log(form);
  const { error, update } = useAxios(`${serverURL}/api/users/register`, {
    method: "POST",
    data: form,
    headers: { "Content-Type": "application/json" },
  });

  const [usersList, setUserList] = useState(0);

  useEffect(() => {
    if (allUsers) {
      setUserList(allUsers.length);
    }
  }, [allUsers]);

  const [didSubmit, setDidSubmit] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    await update();
    setUserList((prevState) => (prevState += 1));

    setForm({
      username: "",
      subscription: "",
      passNumber: "",
      email: "",
      tel: "",
      plan: {
        month_cost: "",
        months: "",
        cost: "",
      },
      role: "user",
      gym: id,
      card: {
        expiry: "",
      },
      subscriptionExp: "",
    });

    setDidSubmit(true);
  };

  const notifyError = () => {
    toast.error(error.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifySuccess = () => {
    toast.success("Utente registrato con successo!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (error && didSubmit) {
      notifyError();
      setDidSubmit(false);
    } else if (!error && didSubmit) {
      notifySuccess();
      setDidSubmit(false);
    }
  }, [didSubmit]);

  return (
    !loading &&
    !listLoading && (
      <>
        <ToastContainer
          toastStyle={{
            backgroundColor: error ? "red" : "#F87A2C",
          }}
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <div className="relative flex p-6 gap-6">
          <Sidebar
            name={data && data.company}
            email={data && data.email}
            isGym={true}
          />
          <div className="flex flex-col flex-grow max-w-section gap-4 mx-auto">
            <ProfileDescription
              name={data && data.company}
              list={usersList}
              isGym={true}
            />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col p-10 rounded-2xl bg-gray gap-4"
            >
              <div className="flex justify-between gap-32">
                <UserSubscription state={form} setState={setForm} />
                <Plans state={form} setState={setForm} />
              </div>
              <OrangeButton
                text="Aggiungi utente"
                twProp="self-end"
                type="submit"
              />
            </form>
            <AdminChart />
          </div>
        </div>
      </>
    )
  );
};
