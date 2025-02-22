import { useState } from "react";
import { cn } from "@/lib/utils/cn";

function StockHistorySelection() {
  const [selected, setSelected] = useState("1 Day");

  const durations = ["1 Day", "1 Week", "1 Month", "3 Months", "6 Months"];

  return (
    <div className="flex gap-2 py-2 flex-wrap">
      {durations.map((duration) => (
        <button
          key={duration}
          onClick={() => setSelected(duration)}
          className={cn(
            "text-xs border py-1 px-3 rounded-full transition-all",
            selected === duration
              ? "bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800"
              : "bg-white dark:bg-dark-foreground text-black dark:text-white"
          )}
        >
          {duration}
        </button>
      ))}
    </div>
  );
}

export default StockHistorySelection;
