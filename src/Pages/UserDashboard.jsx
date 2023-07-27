import React, { useState } from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import clsx from "clsx";

const data = [
  {
    month: "Genn",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Febb",
    savings: 6000,
    checkings: 8000,
  },
  {
    month: "Mar",
    savings: 2000,
    checkings: 200,
  },
  {
    month: "Apr",
    savings: 3000,
    checkings: 1000,
  },
  {
    month: "Mag",
    savings: 6000,
    checkings: 1500,
  },
  {
    month: "Giu",
    savings: 8000,
    checkings: 1200,
  },
  {
    month: "Lug",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Ago",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Sett",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Ott",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Nov",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Dic",
    savings: 4000,
    checkings: 500,
  },
];

export const UserDashboard = () => {
  const [state, setState] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (value === "default") {
      const defaultValue = "savings";
      setState(defaultValue);
    } else if (value === "weight") {
      const weightValue = "checkings";
      setState(weightValue);
    }
  };

  return (
    <div className=" bg-slate-100">
      <div className="p-10 shadow-lg">
        <h2 className="text-2xl text-yellow-500">I tuoi obbiettivi</h2>
        <div className="shadow-lg mt-4 rounded-lg p-3">
          <h3>Quanto pesi oggi?</h3>
          <div className="flex flex-row gap-20 mt-10">
            <div>
              <label htmlFor="peso">Inserisci il tuo peso</label>
              <input name="peso" type="text" className="ml-5" />
            </div>
            <div>
              <label htmlFor="data">Inserisci la data</label>
              <input type="date" className="ml-5" />
            </div>
          <div>
            <button>Invia</button>
          </div>
          </div>
        </div>
        <div className="shadow-lg mt-4 rounded-lg">
          <div className="p-3">
            <h3>Il tuo andamento</h3>
            <label htmlFor="select">Seleziona</label>
            <select name="select" onChange={handleSelectChange}>
              <option value="default">---</option>
              <option value="weight">Peso</option>
              <option value="training">Allenamento</option>
            </select>
            <div className="flex flex-col items-center">
              <p>Stacked Bar Charts</p>
              <div>
                <BarChart data={data} width={1500} height={300}>
                  <CartesianGrid></CartesianGrid>
                  <XAxis dataKey="month"></XAxis>
                  <YAxis dataKey="savings"></YAxis>
                  <Tooltip></Tooltip>
                  <Legend></Legend>
                  <Bar dataKey={state} fill="violet"></Bar>
                  <Bar dataKey="checkings" fill="green"></Bar>
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
