import { useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { generateCandlestickData } from "../data/config";

const PERIODS = ["1D", "1W", "1M", "3M", "1Y"];

const CandleBar = (props) => {
  const { x, y, width, height, open, close } = props;

  if (!props.value || !Array.isArray(props.value)) {
    return null;
  }

  const isUp = close >= open;
  const color = isUp ? "#10B981" : "#EF4444";

  return (
    <g>
      {/* Wick */}
      <line
        x1={x + width / 2}
        y1={y - 2}
        x2={x + width / 2}
        y2={y + height + 2}
        stroke={color}
        strokeWidth={1}
      />

      {/* Candle body */}
      <rect
        x={x + 1}
        y={y}
        width={Math.max(width - 2, 2)}
        height={Math.max(height, 1)}
        fill={color}
        opacity={0.85}
        rx={1}
      />
    </g>
  );
};

export default function CandlestickChart({ height = 280 }) {
  const [period, setPeriod] = useState("1M");

  const rawData = generateCandlestickData(30);

  const data = rawData.map((d) => ({
    day: d.day,
    candle: [Math.min(d.open, d.close), Math.max(d.open, d.close)],
    high: d.high,
    low: d.low,
    open: d.open,
    close: d.close,
    volume: d.volume,
    isUp: d.close >= d.open,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;

      return (
        <div
          className="border rounded p-3 shadow"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            fontSize: "0.75rem",
          }}
        >
          <p
            className="fw-semibold mb-1"
            style={{ color: "var(--foreground)" }}
          >
            Day {d.day}
          </p>

          <p className="mb-1" style={{ color: "var(--muted-foreground)" }}>
            O:{" "}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--foreground)",
              }}
            >
              ${d.open}
            </span>
          </p>

          <p className="mb-1" style={{ color: "var(--muted-foreground)" }}>
            H:{" "}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--gain)",
              }}
            >
              ${d.high}
            </span>
          </p>

          <p className="mb-1" style={{ color: "var(--muted-foreground)" }}>
            L:{" "}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--loss)",
              }}
            >
              ${d.low}
            </span>
          </p>

          <p className="mb-0" style={{ color: "var(--muted-foreground)" }}>
            C:{" "}
            <span
              className="fw-semibold"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: d.isUp ? "var(--gain)" : "var(--loss)",
              }}
            >
              ${d.close}
            </span>
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <div className="d-flex align-items-center gap-1 mb-3">
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
        <ComposedChart
          data={data}
          margin={{
            top: 4,
            right: 4,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            tick={{
              fontSize: 10,
              fill: "var(--muted-foreground)",
            }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `D${value}`}
            interval={4}
          />

          <YAxis
            tick={{
              fontSize: 10,
              fill: "var(--muted-foreground)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
            axisLine={false}
            tickLine={false}
            width={48}
            domain={["auto", "auto"]}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="candle" shape={<CandleBar />} isAnimationActive={false}>
            {data.map((d, index) => (
              <Cell key={index} fill={d.isUp ? "#10B981" : "#EF4444"} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
