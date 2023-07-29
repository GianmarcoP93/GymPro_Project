import { useEffect, useState } from "react";
import layer1 from "../assets/images/icons/layer1.png";

export const UserManagement = () => {
  const [user, setUser] = useState();
  const [_user, _setUser] = useState();

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
        renewal: "15/09/23",
        cardExpiry: "30/11/23",
        cardNumber: "ABCD1234EF",
        subscritionExp: "10/02/24",
      },
      {
        id: 3,
        name: "Andrea Izzo",
        renewal: "22/08/23",
        cardExpiry: "05/12/23",
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
        cardExpiry: "01/01/24",
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
        cardExpiry: "22/09/23",
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
    const member = event.target.value.toLowerCase();
    const search = [..._user].filter((a) =>
      a.name.toLowerCase().includes(member)
    );
    setUser(search);
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

  function parseDate(dateString) {
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10) + 2000;
    return new Date(year, month, day);
  }

  return (
    <>
      <div className="flex flex-col h-[100vh] justify-around w-[98%] mx-auto ">
        <button className="absolute right-5 top-5">
          <img src={layer1} alt="" className=" w-9 " />
        </button>
        <div className="flex justify-center">
          <h1 className=" text-secondary-100 text-3xl">Gestione Utenti</h1>
        </div>
        <div className="flex font-montserrat">
          {user?.length !== 0 && (
            <select
              className="bg-gray text-secondary-300 border border-white-100 py-1 outline-none rounded-md pl-3"
              onChange={selectChoose}
            >
              <option value="default">Default</option>
              <option value="nome">Nome</option>
              <option value="scheda">Scadenza scheda</option>
              <option value="abbonamento">Scadenza abbonamento</option>
            </select>
          )}
          <input
            type="text"
            className="ml-auto bg-gray text-secondary-300 font-montserrat pl-3 border outline-none border-white-100"
            placeholder="Cerca utente"
            onInput={searchMember}
          />
        </div>

        {user?.length > 0 && (
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
              <tbody className="w-full font-montserrat">
                {user &&
                  user.map((user) => {
                    return (
                      <tr
                        key={user.id}
                        className="border-t border-slate-300 text-white-100 text-center "
                      >
                        <td className="py-5  ">
                          <button className=" underline decoration-1 hover:text-secondary-300 ">
                            {user.name}
                          </button>
                        </td>
                        <td>{user.renewal}</td>
                        <td>
                          <button className="underline decoration-1  hover:text-secondary-300  ">
                            {user.cardExpiry}
                          </button>
                        </td>
                        <td>{user.cardNumber}</td>
                        <td>{user.subscritionExp}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
        {user?.length == 0 && (
          <span className="text-secondary-100 font-roboto font-bold text-6xl  mx-auto ">
            NESSUN UTENTE TROVATO
          </span>
        )}
      </div>
    </>
  );
};
