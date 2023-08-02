import { useEffect, useState } from "react";

import cancel from "../assets/images/icons/cancelRed.png";
import garbage from "../assets/images/icons/garbage.png";
import Modal from "react-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TitleCard } from "../Component/TitleCard";
import { ButtonCloseWindow } from "../Component/ButtonCloseWindow";

const rootElement = document.getElementById("root");

Modal.setAppElement(rootElement);

export const UserManagement = () => {
  const [user, setUser] = useState();
  const [_user, _setUser] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [subscriptionExp, setSubscriptionExp] = useState(null);
  const [date, setDate] = useState(null);
  const [isUserSet, setIsUserSet] = useState(false);

  const members = [
    {
      id: 1,
      name: "Gianmarco Pesola",
      renewal: "11/04/2023",
      cardExpiry: "11/10/2023",
      cardNumber: "QR3434JHSU",
      subscritionExp: "07/01/2024",
    },
    {
      id: 2,
      name: "Antonino Alampi",
      renewal: "15/03/2022",
      cardExpiry: "30/05/2023",
      cardNumber: "ABCD1234EF",
      subscritionExp: "10/02/2023",
    },
    {
      id: 3,
      name: "Andrea Izzo",
      renewal: "22/08/2023",
      cardExpiry: "05/07/2023",
      cardNumber: "WXYZ5678UV",
      subscritionExp: "22/03/2024",
    },
    {
      id: 4,
      name: "Simone Sbrilli",
      renewal: "09/06/2023",
      cardExpiry: "28/09/2023",
      cardNumber: "PQRS9012KL",
      subscritionExp: "05/04/2024",
    },
    {
      id: 5,
      name: "Nicola Pisani",
      renewal: "30/07/2023",
      cardExpiry: "27/10/2023",
      cardNumber: "MNOP3456IJ",
      subscritionExp: "17/12/2021",
    },
    {
      id: 6,
      name: "Marco Ingraiti",
      renewal: "04/09/2023",
      cardExpiry: "01/01/2023",
      cardNumber: "EFGH7890AB",
      subscritionExp: "29/06/2024",
    },
    {
      id: 7,
      name: "Gabriele Barberio",
      renewal: "19/05/2023",
      cardExpiry: "10/01/2024",
      cardNumber: "IJKL2345CD",
      subscritionExp: "03/07/2024",
    },
    {
      id: 8,
      name: "Davide Simone",
      renewal: "28/06/2023",
      cardExpiry: "22/09/2022",
      cardNumber: "UVWX6789YZ",
      subscritionExp: "14/09/2024",
    },
    {
      id: 9,
      name: "Jonna Jeronimo",
      renewal: "12/07/2023",
      cardExpiry: "09/10/2023",
      cardNumber: "QRST1234MN",
      subscritionExp: "31/12/2023",
    },
    {
      id: 10,
      name: "Alessandro D'Antoni",
      renewal: "25/08/2023",
      cardExpiry: "20/11/2023",
      cardNumber: "WXYZ5678UV",
      subscritionExp: "08/11/2023",
    },
  ];

  const setMembers = () => {
    if (isUserSet) {
      return;
    } else {
      setUser(members);
      _setUser(members);
      setIsUserSet(true);
    }
  };

  useEffect(() => {
    setMembers();
  }, [user, _user]);

  const searchMember = (event) => {
    const title = event.target.value.toLowerCase();
    const search = [..._user].filter((a) =>
      a.name.toLowerCase().includes(title)
    );
    setUser(search);
    setSearchValue(event.target.value);
    return;
  };

  const clearSearchText = () => {
    setSearchValue("");
    setUser(_user);
    return;
  };

  const deleteUser = (userId) => {
    setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    _setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    notifyDeleted();
    return;
  };

  const isSubscribedExpired = (subscritionExp) => {
    const now = new Date().getTime();
    const cardExp = new Date(
      subscritionExp.split("/").reverse().join("/")
    ).getTime();
    return now >= cardExp;
  };

  const isCardExpired = (cardExpiry) => {
    const now = new Date().getTime();
    const cardExp = new Date(
      cardExpiry.split("/").reverse().join("/")
    ).getTime();
    return now >= cardExp;
  };

  const handleSubscriptionExpChange = (value) => {
    const newDate = value.toLocaleDateString();
    setUser((prevUsers) =>
      prevUsers.map((item) => {
        return item.id === date ? { ...item, subscritionExp: newDate } : item;
      })
    );
    setIsCalendarOpen(false);
    notifySubscription();
  };

  const openCalendar = (id) => {
    setIsCalendarOpen(true);
    setDate(id);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const selectChoose = (event) => {
    const selected = event.target.value;
    let order = [...user];

    switch (selected) {
      case "default":
        order.sort((a, b) => (a.id > b.id ? 1 : -1));
        break;
      case "nome":
        order.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case "scheda":
        order.sort((a, b) => {
          const dateA = new Date(
            a.cardExpiry.split("/").reverse().join("/")
          ).getTime();
          const dateB = new Date(
            b.cardExpiry.split("/").reverse().join("/")
          ).getTime();
          return dateA - dateB;
        });
        break;
      case "abbonamento":
        order.sort((a, b) => {
          const dateA = new Date(
            a.subscritionExp.split("/").reverse().join("/")
          ).getTime();
          const dateB = new Date(
            b.subscritionExp.split("/").reverse().join("/")
          ).getTime();
          return dateA - dateB;
        });
        break;
      default:
        break;
    }
    setUser(order);
  };

  const notifySubscription = () =>
    toast.success("Rinnovato con successo!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyDeleted = () =>
    toast.success("Utente eliminato con successo!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: "#F87A2C" }}
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

      <div className="flex flex-col gap-10 max-h-[100vh] mx-5  ">
        <ButtonCloseWindow />
        <TitleCard text="Gestione utenti" />
        <div className="flex font-montserrat">
          <select
            className="bg-gray text-secondary-300 border border-white-100 py-1 outline-none rounded-md pl-3"
            onChange={selectChoose}
          >
            <option value="default">Default</option>
            <option value="nome">Nome</option>
            <option value="scheda">Scadenza scheda</option>
            <option value="abbonamento">Scadenza abbonamento</option>
          </select>

          <input
            type="text"
            className="ml-auto bg-gray text-secondary-300 font-montserrat pl-3 border outline-none rounded-md border-white-100"
            placeholder="Cerca utente"
            onInput={searchMember}
            value={searchValue}
          />

          <button
            className=" transform -translate-y-1/2 focus:outline-none relative top-2 right-4"
            onClick={clearSearchText}
          >
            <img src={cancel} alt="" className=" w-3  " />
          </button>
        </div>

        <div className="bg-white-00 border border-slate-300 rounded-xl w-full mx-auto bg-gray ">
          <table className="w-full ">
            <thead>
              <tr className="border-bot border-slate-300 text-secondary-100 font-roboto font-bold text-xl">
                <th className="py-5">Lista utenti</th>
                <th>Rinnovato il</th>
                <th>Scadenza scheda</th>
                <th>N. Tessera</th>
                <th>Scadenza abbonamento</th>
              </tr>
            </thead>
            <tbody className="w-full font-montserrat  ">
              {user && user.length === 0 ? (
                <tr className="border-t border-slate-300 text-white-100 text-center">
                  <td className=" text-secondary-100 font-roboto font-bold text-xl  py-5">
                    No user
                  </td>
                </tr>
              ) : (
                user &&
                user.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-slate-300 text-white-100 text-center"
                  >
                    <td className="py-5">
                      <button className="underline decoration-1 hover:text-secondary-300">
                        {user.name}
                      </button>
                    </td>

                    <td>{user.renewal}</td>

                    {isCardExpired(user.cardExpiry) ? (
                      <td>
                        <button className="text-red-200 text-center underline decoration-1 font-montserrat  font-normal hover:text-red-300">
                          Scaduto
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button className="underline decoration-1 hover:text-secondary-300 ">
                          {user.cardExpiry}
                        </button>
                      </td>
                    )}

                    <td>{user.cardNumber}</td>

                    {isSubscribedExpired(user.subscritionExp) ? (
                      <td>
                        <button
                          className="text-red-200 text-center underline decoration-1 font-montserrat  font-normal hover:text-red-300"
                          onClick={() => openCalendar(user.id)}
                        >
                          Scaduto
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button
                          className="text-white-100 text-center underline decoration-1 font-montserrat  font-normal hover:text-secondary-300 "
                          onClick={() => openCalendar(user.id)}
                        >
                          {user.subscritionExp}
                        </button>
                      </td>
                    )}

                    <td>
                      <button
                        className=" transform -translate-y-1/2 focus:outline-none relative top-2 right-4"
                        onClick={() => deleteUser(user.id)}
                      >
                        <img src={garbage} alt="" className=" w-3  " />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={isCalendarOpen}
        onRequestClose={closeCalendar}
        contentLabel="Calendar Modal"
      >
        <div>
          <h2 className="text-red-200">Seleziona la nuova data:</h2>
          <div>
            <Calendar
              value={subscriptionExp}
              onChange={handleSubscriptionExpChange}
              className="text-center px-9 [&>*:first-child]:text-red-200 right-10 w-full "
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
