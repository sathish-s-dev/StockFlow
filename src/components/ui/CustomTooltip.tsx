import dayjs from "dayjs";
import { TooltipProps } from "recharts";

export function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  console.log(active, payload, label);

  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="tooltip">
      <h4>{dayjs(label).format("dddd, D MMM, YYYY")}</h4>
      <p>${payload[0]?.value?.toFixed(2)} USD</p>
    </div>
  );
}