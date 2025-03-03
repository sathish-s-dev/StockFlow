import type { AreaChartData } from "@/types";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

interface SmallAreaChartProps {
    chartData: AreaChartData[];
    dataKey: string;
    index: number;
  }
  
  export function SmallAreaChart({ chartData, dataKey, index }: SmallAreaChartProps) {
    const color = index % 2 === 0 ? "#ff0000" : "#24ff25"; // Alternating colors
  
    return (
      <div className="w-full relative min-w-24">
        <ResponsiveContainer width="100%" height={50}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={"color1"} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={"#ff0000"} stopOpacity={0.4} />
                <stop offset="75%" stopColor={"#ff0000"} stopOpacity={0.05} />
                <stop offset="100%" stopColor={"#ff0000"} stopOpacity={0} />
              </linearGradient>
              <linearGradient id={"color2"} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={"#24ff25"} stopOpacity={0.4} />
                <stop offset="75%" stopColor={"#24ff25"} stopOpacity={0.05} />
                <stop offset="100%" stopColor={"#24ff25"} stopOpacity={0} />
              </linearGradient>
            </defs>
  
            {/* Use unique gradient ID */}
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              fill={`url(#${index % 2 === 0 ? "color1" : "color2"})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }