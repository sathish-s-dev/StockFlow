import { cn } from "@/lib/utils/cn";
import { Dispatch, SetStateAction } from "react";

function StockHistorySelection({
  chartDuration,
  setChartDuration,
}: {
  chartDuration: {
    key: string;
    value: number;
  };
  setChartDuration: Dispatch<
    SetStateAction<{
      key: string;
      value: number;
    }>
  >;
}) {
  const durations = [
    { key: "1 day", value: 1 },
    { key: "1 week", value: 7 },
    { key: "1 month", value: 30 },
    { key: "3 months", value: 90 },
    { key: "6 months", value: 180 },
  ];

  return (
    <div className="flex gap-2 py-2 flex-wrap">
      {durations.map((duration) => (
        <button
          key={duration.key}
          onClick={() => setChartDuration(duration)}
          className={cn(
            "text-xs border py-1 px-3 rounded-full transition-all",
            chartDuration.key === duration.key
              ? "bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800"
              : "bg-white dark:bg-dark-foreground text-black dark:text-white"
          )}
        >
          {duration.key}
        </button>
      ))}
    </div>
  );
}

export default StockHistorySelection;
