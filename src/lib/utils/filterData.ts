import type { CandlestickData } from "@/types";
import dayjs from "dayjs";

export const filterData = (
  closeData: CandlestickData[] | undefined,
  days: number
) => {
  if (!closeData) return [];
  const today = dayjs(); // Current date with full year
  return closeData.filter(({ date }) => {
    // Parse the date assuming the current year
    let dataDate = dayjs(date, "YYYY-MM-DD").year(today.year());
    console.log(dataDate, "DATA DATE");

    // Handle cases where dataDate is in the future (e.g., Dec vs. Jan)
    if (dataDate.isAfter(today)) {
      console.log(dataDate);
      dataDate = dataDate.subtract(1, "year");
    }

    console.log(
      "Difference:",
      today.diff(dataDate, "day"),
      "Limit:",
      days,
      "Date:",
      dataDate.format("DD-MM-YYYY")
    );

    return today.diff(dataDate, "day") <= days;
  });
};
