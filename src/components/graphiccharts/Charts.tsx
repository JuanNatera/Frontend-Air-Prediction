"use client";
import styles from "./Charts.module.css";


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "APR", current: 350, previous: 300 },
  { month: "MAY", current: 330, previous: 250 },
  { month: "JUN", current: 240, previous: 320 },
  { month: "JUL", current: 380, previous: 150 },
  { month: "AUG", current: 330, previous: 280 },
  { month: "SEP", current: 420, previous: 360 },
  { month: "OCT", current: 400, previous: 480 },
];

export default function ConsumptionChart() {
  return (
    <div className={styles.card}>
      <div className={styles.chartheader}>
        <span>Evolution of consumption</span>

        <select>
          <option>Last year</option>
          <option>Next month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#173B55" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#173B55" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#E8ECEF"
            strokeDasharray="3 3"
            vertical={true}
          />

          <XAxis
            dataKey="month"
            tick={{
              fill: "#A5ADB5",
              fontSize: 10,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 600]}
            ticks={[0, 100, 200, 300, 400, 500, 600]}
            tick={{
              fill: "#A5ADB5",
              fontSize: 10,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#09283D",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "11px",
            }}
          />

          {/* Línea punteada */}
          <Area
            type="monotone"
            dataKey="previous"
            stroke="#B7C3CC"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="none"
            dot={false}
          />

          {/* Línea principal */}
          <Area
            type="monotone"
            dataKey="current"
            stroke="#173B55"
            strokeWidth={2.5}
            fill="url(#blueGradient)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#173B55",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
