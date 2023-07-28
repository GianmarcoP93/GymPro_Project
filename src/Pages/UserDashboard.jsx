import React, { useEffect, useState } from "react";
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
    month: "Gen",
    bmi: 0,
  },
  {
    month: "Feb",
    bmi: 0,
  },
  {
    month: "Mar",
    bmi: 0,
  },
  {
    month: "Apr",
    bmi: 0,
  },
  {
    month: "Mag",
    bmi: 0,
  },
  {
    month: "Giu",
    bmi: 0,
  },
  {
    month: "Lug",
    bmi: 0,
  },
  {
    month: "Ago",
    bmi: 0,
  },
  {
    month: "Set",
    bmi: 0,
  },
  {
    month: "Ott",
    bmi: 0,
  },
  {
    month: "Nov",
    bmi: 0,
  },
  {
    month: "Dic",
    bmi: 0,
  },
];

export const UserDashboard = () => {
  const [formData, setFormData] = useState({
    month: "",
    weight: "",
    height: "",
    bmi: "",
  });

  const [chartData, setChartData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const month = formData.month;
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      console.log("Inserisci i valori validi per il peso e l'altezza");
      return;
    }

    const bmi = weight / ((height / 100) * (height / 100));

    myFunction(month, weight, height, bmi);

    const newData = {
      month: month,
      bmi: bmi.toFixed(2),
    };

    setChartData((prevData) =>
      prevData.map((item) => (item.month === month ? newData : item))
    );
  };

  const myFunction = (month, height, weight, bmi) => {
    console.log("mese: ", month);
    console.log("peso: ", height);
    console.log("altezza: ", weight);
    console.log("BMI: ", bmi);
  };

  return (
    <div className=" bg-slate-100">
      <div className="p-10 shadow-lg">
        <h2 className="text-2xl text-yellow-500">I tuoi obbiettivi</h2>
        <div className="shadow-lg mt-4 rounded-lg p-3">
          <h3>Inserisci i tuoi dati</h3>
          <form
            onSubmit={handleSubmit}
            name="userForm"
            className="flex flex-row gap-20 mt-10"
          >
            <div>
              <label htmlFor="peso" name="weight">
                Inserisci il tuo peso
              </label>
              <input
                value={formData.weight}
                onChange={handleChange}
                name="weight"
                type="text"
                className="ml-5"
              />
            </div>
            <div>
              <label htmlFor="height" name="height">
                Inserisci la tua statura
              </label>
              <input
                value={formData.height}
                onChange={handleChange}
                name="height"
                type="text"
                className="ml-5"
              />
            </div>
            <div>
              <label htmlFor="month" name="month">
                Inserisci il mese
              </label>
              <select
                value={formData.month}
                onChange={handleChange}
                name="month"
              >
                <option value="null">---</option>
                <option value="Gen">Gennaio</option>
                <option value="Feb">Febbraio</option>
                <option value="Mar">Marzo</option>
                <option value="Apr">Aprile</option>
                <option value="Mag">Maggio</option>
                <option value="Giu">Giugno</option>
                <option value="Lug">Luglio</option>
                <option value="Ago">Agosto</option>
                <option value="Set">Settembre</option>
                <option value="Ott">Ottobre</option>
                <option value="Nov">Novembre</option>
                <option value="Dic">Dicembre</option>
              </select>
            </div>
            <div>
              <button type="submit">Invia</button>
            </div>
          </form>
        </div>
        <div className="shadow-lg mt-4 rounded-lg">
          <div className="p-3">
            <h3>Il tuo andamento</h3>
            <div className="flex flex-col items-center">
              <p>Stacked Bar Charts</p>
              <div>
                <BarChart data={chartData} width={1500} height={300}>
                  <CartesianGrid></CartesianGrid>
                  <XAxis dataKey="month"></XAxis>
                  <YAxis dataKey="bmi"></YAxis>
                  <Tooltip></Tooltip>
                  <Legend></Legend>
                  <Bar dataKey="bmi" fill="violet"></Bar>
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
