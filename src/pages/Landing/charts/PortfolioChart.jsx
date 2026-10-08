import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { generatePortfolioData } from "../../data/config";

const PERIODS = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="border rounded p-3 shadow"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          fontSize: "0.875rem",
        }}
      >
        <p className="mb-1" style={{ color: "var(--muted-foreground)" }}>
          {label}
        </p>

        <p
          className="mb-0 fw-semibold"
          style={{
            color: "var(--foreground)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
};

export default function PortfolioChart({ height = 220 }) {
  const [period, setPeriod] = useState("1Y");

  const data = generatePortfolioData(12);
  const isUp = data[data.length - 1].value >= data[0].value;

  const chartColor = isUp ? "#10B981" : "#EF4444";

  return (
    <div>
      <div className="d-flex align-items-center gap-1 mb-3 flex-wrap">
        {PERIODS.map((p) => {
          const isActive = period === p;

          return (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod(p)}
              className="btn border-0 px-3 py-1"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                borderRadius: "4px",
                color: isActive ? "#fff" : "var(--muted-foreground)",
                background: isActive
                  ? "linear-gradient(135deg, #1A3A6B, #00C9A7)"
                  : "transparent",
                transition: "all 0.15s ease",
              }}
            >
              {p}
            </button>
          );
        })}
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{
            top: 4,
            right: 4,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColor} stopOpacity={0.15} />
              <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{
              fontSize: 11,
              fill: "var(--muted-foreground)",
              fontFamily: "'Nunito', sans-serif",
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fontSize: 11,
              fill: "var(--muted-foreground)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            width={52}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="value"
            stroke={chartColor}
            strokeWidth={2}
            fill="url(#portfolioGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
