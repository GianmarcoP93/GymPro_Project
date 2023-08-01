import DataTable, { createTheme } from "react-data-table-component";
import { parse } from "date-fns";
import esc from "../assets/images/icons/escOrange.png";

const parseDate = (dateString) => {
  const parsedDate = parse(dateString, "dd/MM/yy", new Date());
  return parsedDate;
};

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};

export const Prova = () => {
  const rawData = [
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

  const data = rawData.map((item) => ({
    ...item,
    renewal: parseDate(item.renewal),
    cardExpiry: parseDate(item.cardExpiry),
    subscritionExp: parseDate(item.subscritionExp),
  }));

  const columns = [
    {
      name: "Lista utenti",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Rinnovato il",
      selector: (row) => row.renewal,
      sortable: true,
      format: (row) => row.renewal.toLocaleDateString(),
      format: (row) => formatDate(row.renewal),
    },
    {
      name: "Scadenza scheda",
      selector: (row) => row.cardExpiry,
      sortable: true,
      format: (row) => row.cardExpiry.toLocaleDateString(),
      format: (row) => formatDate(row.renewal),
    },
    {
      name: "N. Tessera",
      selector: (row) => row.cardNumber,
    },
    {
      name: "Scadenza abbonamento",
      selector: (row) => row.subscritionExp,
      sortable: true,
      format: (row) => row.subscritionExp.toLocaleDateString(),
      format: (row) => formatDate(row.renewal),
    },
  ];

  createTheme(
    "solarized",
    {
      text: {
        primary: "#FF721B",
        secondary: "#2aa198",
      },
      background: {
        default: "#393b44",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#FFFFFF",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <>
      <div className="flex flex-col gap-10 max-h-[100vh] mx-5  ">
        <button className="absolute right-5 top-5">
          <img src={esc} alt="" className=" w-9 " />
        </button>
        <div className="flex justify-center mt-10">
          <h1 className=" text-secondary-100 text-3xl">Gestione Utenti</h1>
        </div>
      </div>
      <DataTable columns={columns} data={data} theme="solarized" />
    </>
  );
};
