const ProfilePage = () => {
  return (
    <div>
      <StockChart />
    </div>
  );
};

export default ProfilePage;

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

// Sample Candlestick Data
const candlestick = [
  { date: "2025-02-16", close: 100, low: 95, high: 110 },
  { date: "2025-02-17", close: 105, low: 98, high: 112 },
  { date: "2025-02-18", close: 110, low: 100, high: 115 },
  { date: "2025-02-19", close: 102, low: 97, high: 108 },
  { date: "2025-02-20", close: 108, low: 99, high: 113 },
  { date: "2025-02-21", close: 115, low: 105, high: 120 },
  { date: "2025-02-22", close: 120, low: 110, high: 125 },
  { date: "2025-02-23", close: 125, low: 115, high: 130 },
  { date: "2025-02-24", close: 130, low: 120, high: 135 },
  { date: "2025-02-25", close: 135, low: 125, high: 140 },
];

// Format Data
const closeData = candlestick?.map((item) => ({
  close: item.close,
  date: dayjs(item.date).format("MM-DD"), // Format Date (DD-MM)
  low: item.low,
  high: item.high,
}));

// Function to Filter Data Based on Range
const filterData = (days: number) => {
  const today = dayjs(); // Current date with full year
  return closeData.filter(({ date }) => {
    // Parse the date assuming the current year
    let dataDate = dayjs(date, "DD-MM").year(today.year());

    // Handle cases where dataDate is in the future (e.g., Dec vs. Jan)
    if (dataDate.isAfter(today)) {
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

const StockChart = () => {
  const [filteredData, setFilteredData] = useState(filterData(7)); // Default: 1 Week

  const handleFilterChange = (days: number) => {
    setFilteredData(filterData(days));
  };

  console.log(filteredData);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => handleFilterChange(7)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          1 Week
        </button>
        <button
          onClick={() => handleFilterChange(30)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          1 Month
        </button>
        <button
          onClick={() => handleFilterChange(90)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          3 Months
        </button>
      </div>

      {/* Line Chart */}
      <div className="w-[500px] h-[500px]">
        <ResponsiveContainer width={1000} height={400}>
          <LineChart data={filteredData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
