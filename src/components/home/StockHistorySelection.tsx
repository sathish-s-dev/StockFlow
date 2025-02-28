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
    { key: "1D", value: 1 },
    { key: "1W", value: 7 },
    { key: "1M", value: 30 },
    { key: "3M", value: 90 },
    { key: "6M", value: 180 },
  ];

  return (
    <div className="flex flex-wrap border w-fit rounded-md overflow-clip">
      {durations.map((duration) => (
        <button
          key={duration.key}
          onClick={() => setChartDuration(duration)}
          className={cn(
            "text-xs py-1 px-3 transition-all",
            chartDuration.key === duration.key
              ? "bg-orange-400/80 dark:bg-slate-200 text-white dark:text-slate-800"
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
