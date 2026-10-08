import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function MiniSparkline({ data, up = true, height = 40 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke={up ? "var(--gain)" : "var(--loss)"}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
