import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
} from "recharts";

const data = [
  {
    month: "Gennaio",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Febbraio",
    savings: 6000,
    checkings: 8000,
  },
  {
    month: "Marzo",
    savings: 2000,
    checkings: 200,
  },
  {
    month: "Aprile",
    savings: 3000,
    checkings: 1000,
  },
  {
    month: "Maggio",
    savings: 6000,
    checkings: 1500,
  },
  {
    month: "Giugno",
    savings: 8000,
    checkings: 1200,
  },
  {
    month: "Luglio",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Agosto",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Settembre",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Ottobbre",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Novembre",
    savings: 4000,
    checkings: 500,
  },
  {
    month: "Dicembre",
    savings: 4000,
    checkings: 500,
  },
];

export const UserDashboard = () => {
  return (
    <div className=" bg-slate-500 h-screen">
      <div className="p-10 shadow-lg">
        <h2 className="text-2xl text-yellow-200">I tuoi obbiettivi</h2>
        <div className="shadow-lg h-80 mt-4 rounded-lg">
          <h3 className="p-3">Quanto pesi oggi?</h3>
        </div>
        <div className="shadow-lg h-80 mt-4 rounded-lg">
          <div className="p-3">
            <h3>Il tuo andamento</h3>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
