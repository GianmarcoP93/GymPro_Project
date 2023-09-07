import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { useAxios } from "../hooks/useAxios";

export const AdminChart = () => {
  const id = useSelector((state) => state.auth.adminId);
  const token = useSelector((state) => state.auth.adminToken);
  const allUsers = useSelector((state) => state.data.allUsers);

  const { data, loading, update } = useAxios(
    `http://localhost:3030/api/chartData/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  useEffect(() => {
    update();
  }, [allUsers]);

  return (
    <div className=" bg-gray rounded-2xl">
      <div className="p-10 shadow-lg">
        <h2 className="text-2xl text-secondary-100">Entrate e iscrizioni</h2>
        <div className="border border-white-100 mt-4 rounded-lg">
          <div className="p-3">
            <h3 className="text-secondary-100">Il tuo andamento</h3>
            <div className="flex flex-col items-center justify-center">
              <p className="text-white-100">Grafici cartesiani</p>
              <div className="w-full">
                <ResponsiveContainer width="99%" height={300}>
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                      yAxisId="left"
                      dataKey="Entrate"
                      orientation="left"
                    />
                    <Tooltip />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="Entrate"
                      stroke="#F87A2C"
                      fill="#F87A2C"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full">
                <ResponsiveContainer width="99%" height={300}>
                  <AreaChart aChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                      yAxisId="left"
                      dataKey="Iscrizioni"
                      orientation="left"
                    />
                    <Tooltip />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="Iscrizioni"
                      stroke="#62B34C"
                      fill="#62B34C"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChart;
