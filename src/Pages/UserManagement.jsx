import { useEffect, useState } from "react";
import esc from "../assets/images/icons/escOrange.png";
import cancel from "../assets/images/icons/cancelRed.png";
import garbage from "../assets/images/icons/garbage.png";
import { parse } from "date-fns";
import Modal from "react-modal";
import Calendar from "react-calendar";

const rootElement = document.getElementById("root");

Modal.setAppElement(rootElement);

export const UserManagement = () => {
  const [user, setUser] = useState();
  const [_user, _setUser] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [subscriptionExp, setSubscriptionExp] = useState(null);

  useEffect(() => {
    const members = [
      {
        id: 1,
        name: "Gianmarco Pesola",
        renewal: "11/04/23",
        cardExpiry: "11/10/23",
        cardNumber: "QR3434JHSU",
        subscritionExp: "07/01/24",
      },
      {
        id: 2,
        name: "Antonino Alampi",
        renewal: "15/03/22",
        cardExpiry: "30/05/23",
        cardNumber: "ABCD1234EF",
        subscritionExp: "10/02/23",
      },
      {
        id: 3,
        name: "Andrea Izzo",
        renewal: "22/08/23",
        cardExpiry: "05/07/23",
        cardNumber: "WXYZ5678UV",
        subscritionExp: "22/03/24",
      },
      {
        id: 4,
        name: "Simone Sbrilli",
        renewal: "09/06/23",
        cardExpiry: "28/09/23",
        cardNumber: "PQRS9012KL",
        subscritionExp: "05/04/24",
      },
      {
        id: 5,
        name: "Nicola Pisani",
        renewal: "30/07/23",
        cardExpiry: "27/10/23",
        cardNumber: "MNOP3456IJ",
        subscritionExp: "17/12/23",
      },
      {
        id: 6,
        name: "Marco Ingraiti",
        renewal: "04/09/23",
        cardExpiry: "01/01/23",
        cardNumber: "EFGH7890AB",
        subscritionExp: "29/06/24",
      },
      {
        id: 7,
        name: "Gabriele Barberio",
        renewal: "19/05/23",
        cardExpiry: "10/01/24",
        cardNumber: "IJKL2345CD",
        subscritionExp: "03/07/24",
      },
      {
        id: 8,
        name: "Davide Simone",
        renewal: "28/06/23",
        cardExpiry: "22/09/22",
        cardNumber: "UVWX6789YZ",
        subscritionExp: "14/09/24",
      },
      {
        id: 9,
        name: "Jonna Jeronimo",
        renewal: "12/07/23",
        cardExpiry: "09/10/23",
        cardNumber: "QRST1234MN",
        subscritionExp: "31/12/23",
      },
      {
        id: 10,
        name: "Alessandro D'Antoni",
        renewal: "25/08/23",
        cardExpiry: "20/11/23",
        cardNumber: "WXYZ5678UV",
        subscritionExp: "08/11/23",
      },
    ];
    setUser(members);
    _setUser(members);
  }, []);

  const searchMember = (event) => {
    const title = event.target.value.toLowerCase();
    const search = [..._user].filter((a) =>
      a.name.toLowerCase().includes(title)
    );
    setUser(search);
    setSearchValue(event.target.value);
  };

  const clearSearchText = () => {
    setSearchValue("");
    setUser(_user);
  };

  const deleteUser = (userId) => {
    setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const isSubscribedExpired = (subscritionExp) => {
    const now = new Date();
    const subExp = parseDate(subscritionExp);
    return now >= subExp;
  };

  const isCardExpired = (cardExpiry) => {
    const now = new Date();
    const cardExp = parseDate(cardExpiry);
    return now >= cardExp;
  };

  const handleSubscriptionExpChange = (date) => {
    setSubscriptionExp(date);
    setIsCalendarOpen(false);
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
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
          const dateA = parseDate(a.cardExpiry);
          console.log(dateA.getDate());
          const dateB = parseDate(b.cardExpiry);
          console.log(dateB);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "abbonamento":
        order.sort((a, b) => {
          const dateA = parseDate(a.subscritionExp);
          console.log(dateA.getDate());
          const dateB = parseDate(b.subscritionExp);
          console.log(dateB);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      default:
        break;
    }
    setUser(order);
  };

  // npm install date-fns
  const parseDate = (dateString) => {
    const parsedDate = parse(dateString, "dd/MM/yy", new Date());
    return parsedDate;
  };

  return (
    <>
      <div className="flex flex-col gap-10 max-h-[100vh] mx-5  ">
        <button className="absolute right-5 top-5">
          <img src={esc} alt="" className=" w-9 " />
        </button>
        <div className="flex justify-center mt-10">
          <h1 className=" text-secondary-100 text-3xl">Gestione Utenti</h1>
        </div>
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
                          onClick={openCalendar}
                        >
                          Scaduto
                        </button>
                      </td>
                    ) : (
                      <td>{user.subscritionExp}</td>
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
          <h2>Seleziona la nuova data:</h2>
          <Calendar
            value={subscriptionExp}
            onChange={handleSubscriptionExpChange}
            className="text-center px-9  "
          />
        </div>
      </Modal>
    </>
  );
};
