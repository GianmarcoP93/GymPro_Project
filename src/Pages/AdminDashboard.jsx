import { useDispatch, useSelector } from "react-redux";
import { OrangeButton } from "../components/shared/OrangeButton";
import { Plans } from "../components/Plans";
import { ProfileDescription } from "../components/shared/ProfileDescription";
import { Sidebar } from "../components/shared/Sidebar";
import { UserSubscription } from "../components/UserSubscription";
import { serverURL } from "../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import AdminChart from "../components/AdminChart";
import axios from "axios";
import { setAllUsers, updateAllUsers } from "../store/dataSlice";

export const AdminDashboard = () => {
  const id = useSelector((state) => state.auth.adminId);
  const data = useSelector((state) => state.data.me);
  const allUsers = useSelector((state) => state.data.allUsers);
  const allUsersLoading = useSelector((state) => state.data.allUsersLoading);
  const userLoading = useSelector((state) => state.data.userLoading);

  const [usersList, setUserList] = useState(0);
  const [error, setError] = useState(false);
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

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError(null);

      const response = await axios({
        url: `${serverURL}/api/users/register`,
        method: "POST",
        data: form,
        headers: { "Content-Type": "application/json" },
      });

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
      notifySuccess();

      dispatch(updateAllUsers(response.data.user));
    } catch (error) {
      setError(error);
      notifyError(error?.response?.data?.message);
    }
  };

  const notifyError = (error) => {
    toast.error(error, {
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
    setUserList(allUsers.length || 0);
  }, [allUsers]);

  return (
    !userLoading &&
    !allUsersLoading && (
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
