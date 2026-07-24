"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { opportunities as demoData } from "@/data/opportunities";
import { getStoredOpportunities } from "@/lib/storage";

export default function DashboardChart() {
  const [data, setData] = useState([
    { name: "Jobs", total: 0 },
    { name: "Internships", total: 0 },
    { name: "Scholarships", total: 0 },
    { name: "Training", total: 0 },
    { name: "Volunteer", total: 0 },
  ]);

  useEffect(() => {
    const stored = getStoredOpportunities();
    const all = [...demoData, ...stored];

    setData([
      {
        name: "Jobs",
        total: all.filter((o) => o.category === "Job").length,
      },
      {
        name: "Internships",
        total: all.filter((o) => o.category === "Internship").length,
      },
      {
        name: "Scholarships",
        total: all.filter((o) => o.category === "Scholarship").length,
      },
      {
        name: "Training",
        total: all.filter((o) => o.category === "Training").length,
      },
      {
        name: "Volunteer",
        total: all.filter((o) => o.category === "Volunteer").length,
      },
    ]);
  }, []);

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Opportunities by Category
      </h2>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#475569"
            />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
            />

            <Bar
              dataKey="total"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}