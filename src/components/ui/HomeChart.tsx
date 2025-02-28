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
import { AreaChartData } from "@/types";

dayjs.extend(subtract);

export default function HomeChart({ duration }: { duration: number }) {
  const data: { date: string; value: number }[] = [];
  for (let num = duration; num >= 0; num--) {
    data.push({
      date: dayjs().subtract(num, "day").format("YYYY-MM-DD"),
      value: 5 + Math.random(),
    });
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = dayjs(str);
            return date.date() % 7 === 0 ? date.format("MMM, D") : "";
          }}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

interface SmallChartProps {
  chartData: AreaChartData[];
  dataKey: string;
}

export function SmallChart({ chartData, dataKey }: SmallChartProps) {
  return (
    <div className="w-full h-32 relative">
      <ResponsiveContainer width={150} height={50}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#24ff25" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#24ff25" stopOpacity={0.05} />
              <stop offset="100%" stopColor="#24ff25" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area dataKey={dataKey} stroke="#24ff25" fill="url(#color1)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
