import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import dayjs from "dayjs";
import subtract from "dayjs/plugin/duration";
import { CustomTooltip } from "./CustomTooltip";

dayjs.extend(subtract);

function generateData(duration: number) {
  const data: { date: string; value: number }[] = [];
  for (let num = duration; num >= 0; num--) {
    data.push({
      date: dayjs().subtract(num, "day").format("YYYY-MM-DD"),
      value: 2650 + +(Math.random() * 10).toFixed(2),
    });
  }

  return data;
}

export default function HomeChart({ duration }: { duration: number }) {
  const data = generateData(duration);
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fd9307" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#fd9307" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          dataKey="value"
          strokeWidth={1.5}
          stroke="#fd9307"
          fill="url(#color)"
        />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          interval={0} // Force showing all labels
          tickFormatter={(str) => {
            const date = dayjs(str);
            return date.date() % 7 === 0 ? date.format("MMM D") : "";
          }}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `₹ ${number.toFixed(1)}`}
          domain={[2600, "auto"]}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
