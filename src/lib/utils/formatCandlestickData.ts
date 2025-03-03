import type { CandlestickData } from "@/types";
import dayjs from "dayjs";

const formatCandlestickData = (item: CandlestickData): CandlestickData => {
  let date = dayjs(item.date);

  // Check if the date is in the future
  if (date.isAfter(dayjs())) {
    date = date.subtract(1, "year"); // Remove 1 year
  }

  return {
    ...item,
    date: date.format("MM-DD"),
  };
};

export default formatCandlestickData;
