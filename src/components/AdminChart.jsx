import React, { useState } from "react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { OrangeButton } from "./shared/OrangeButton";
import { internalMemory } from "../utility/internalMemory.mjs";
import { updateUserSub } from "../store/userSlice";
import { useSelector } from "react-redux";
import { useAxios } from "../hooks/useAxios";

export const AdminChart = ({ usersList }) => {
  const [formData, setFormData] = useState({
    month: "",
  });
  const id = useSelector((state) => state.auth.adminId);
  const token = useSelector((state) => state.auth.adminToken);

  const calculateTotalRevenue = (data, month) => {
    const filteredData = data.filter((item) => item.month === month);
    const totalRevenue = filteredData.reduce(
      (total, item) => total + item.revenue,
      0
    );
    return totalRevenue;
  };
  const calculateNewSubs = (data, month) => {
    const filteredData = data.filter((item) => item.month === month);
    const newSubs = filteredData.reduce(
      (total, item) => total + item.subscribers,
      0
    );
    return newSubs;
  };

  const { data } = useAxios(`http://localhost:3030/api/chartData/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const [chartData, setChartData] = useState(() => {
    const storedChartData = internalMemory.get("chartData");
    if (storedChartData) {
      try {
        return storedChartData;
      } catch (error) {
        console.error(
          "Errore durante il parsing dei dati dal localStorage:",
          error
        );
      }
    }
    return data;
  });

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
    const revenue = calculateTotalRevenue(usersList, formData.month);
    const subscribers = calculateNewSubs(usersList, formData.month);

    const newUserSubData = {
      month: month,
      Entrate: revenue,
      Iscritti: subscribers,
    };

    dispatch(updateUserSub(newUserSubData));

    const updateChartData = chartData.map((item) =>
      item.month === month
        ? { ...item, Entrate: revenue, Iscritti: subscribers }
        : item
    );

    setChartData(updateChartData);

    internalMemory.save("chartData", updateChartData);
  };

  return (
    <div className=" bg-gray rounded-2xl">
      <div className="p-10 shadow-lg">
        <h2 className="text-2xl text-secondary-100">Entrate e abbonamenti</h2>
        <div className="border border-white-100  mt-4 rounded-lg p-3">
          <h3 className="text-white-100">Filtra</h3>
          <form
            onSubmit={handleSubmit}
            name="userForm"
            className="flex flex-row gap-20 mt-6"
          >
            <div>
              <label htmlFor="month" className="text-white-100">
                Inserisci il mese
                <select
                  value={formData.month}
                  onChange={handleChange}
                  name="month"
                  className="text-white-100 bg-transparent border border-white-100 rounded-lg outline-none pl-2 "
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
              </label>
            </div>
            <div className="flex items-end">
              <OrangeButton text="Invia" type="submit" />
            </div>
          </form>
        </div>
        <div className="border border-white-100 mt-4 rounded-lg">
          <div className="p-3">
            <h3 className="text-secondary-100">Il tuo andamento</h3>
            <div className="flex flex-col items-center">
              <p className="text-white-100">Grafici a barre</p>
              <div className="w-full">
                <ResponsiveContainer width="99%" height={300}>
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="Entrate"
                      stroke="#F87A2C"
                      fill="#F87A2C"
                    ></Area>
                    <Area
                      type="monotone"
                      dataKey="Iscritti"
                      stroke="#62B34C"
                      fill="#62B34C"
                    ></Area>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <OrangeButton
                type="button"
                text="Reset"
                twProp="self-end"
                func={() => {
                  internalMemory.clear();
                  location.reload();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChart;
