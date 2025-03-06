// import { monthStocks } from "@/constants/monthStocks";
import { filterData } from "@/lib/utils/filterData";
import formatCandlestickData from "@/lib/utils/formatCandlestickData";
import generateCandlestickData from "@/lib/utils/generateData";
// import { useGetCandlestickDataQuery } from "@/services/mockStockApi";
import type { RootState } from "@/store/store";
import type { CandlestickData, Duration } from "@/types";
import { ApexOptions } from "apexcharts";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

interface ApexChartProps {
  chartDuration: Duration;
  symbol: string;
  setChartDuration: Dispatch<SetStateAction<Duration>>;
}

const ApexChart = ({ chartDuration }: ApexChartProps) => {
  const theme = useSelector((state: RootState) => state.theme);
  // const { data: candlestick } = useGetCandlestickDataQuery();

  const data = useMemo(() => {
    const candlestick = generateCandlestickData(150, chartDuration.value);

    return candlestick?.map(formatCandlestickData) || [];
  }, [chartDuration]);

  // const [filteredData, setFilteredData] = useState(
  //   filterData(data, chartDuration.value)
  // );

  // // Fetch stock history data
  // const {
  //   data: stockHistoryData,
  //   isLoading,
  //   refetch,
  // } = useGetStockHistoryQuery(
  //   { duration: chartDuration, symbol },
  //   { refetchOnMountOrArgChange: true }
  // );

  // // Refetch data when duration or symbol changes
  // useEffect(() => {
  //   refetch();
  // }, [chartDuration, symbol, refetch]);

  // // Fetch stock quote
  // const { data: stockQuote, isLoading: isQuoteLoading } =
  //   useGetStockQuoteQuery(symbol);

  // console.log(stockQuote, isQuoteLoading, stockHistoryData, isLoading);

  // const isLoading = false;
  // const isQuoteLoading = false;
  // const stockHistoryData = monthStocks;

  const [filteredData, setFilteredData] = useState<CandlestickData[]>([]);

  // Update filtered data whenever chartDuration changes
  useEffect(() => {
    const filtered = filterData(data, chartDuration.value);
    setFilteredData(filtered);
  }, [data, chartDuration, setFilteredData]);

  // console.log(filteredData, "filtered data from stock details");

  // Memoize chart data
  const chartData = useMemo(() => {
    if (!filteredData.length) {
      return { series: [{ name: "Stock Prices", data: [] }] };
    }
    return {
      series: [
        {
          name: "Stock Prices",
          data: filteredData.map((item) => ({
            x: item.date, // Ensure date is a valid timestamp
            y: [item.open, item.high, item.low, item.close],
          })),
        },
      ],
    };
  }, [filteredData]);

  // Memoize ApexCharts options for performance optimization
  const options: ApexOptions = useMemo(() => {
    return {
      chart: {
        type: "candlestick",
        height: 300,
        background: "transparent",
        zoom: { enabled: true },
        toolbar: { show: false },
      },
      xaxis: { type: "datetime" },
      yaxis: { tooltip: { enabled: true } },
      theme: {
        mode: theme === "dark" ? "dark" : "light",
        palette: "palette2",
        monochrome: { color: "#151515" },
      },
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"],
    };
  }, [theme]);

  return (
    <div className="w-full">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="candlestick"
          height={300}
          width={"98%"}
        />
      </div>
    </div>
  );
};

export default ApexChart;
