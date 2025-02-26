import { useEffect, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getFilteredCandlestickData } from "@/lib/utils/getFilteredCandlestickData";
import { Dispatch, SetStateAction } from "react";
import { useGetStockHistoryQuery } from "@/services/alphaVantageApi";
import { useGetStockQuoteQuery } from "@/services/stocksApi";
import { ApexOptions } from "apexcharts";
import { monthStocks } from "@/constants/monthStocks";

const ApexChart = ({
  chartDuration,
  symbol = "AAPL",
  setChartDuration,
}: {
  chartDuration: string;
  symbol: string;
  setChartDuration: Dispatch<SetStateAction<string>>;
}) => {
  const theme = useSelector((state: RootState) => state.theme);

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

  const isLoading = false;
  // const isQuoteLoading = false;
  const stockHistoryData = monthStocks;

  // Memoize chart data to avoid unnecessary renders
  const chartData = useMemo(() => {
    if (!stockHistoryData || isLoading)
      return { series: [{ name: "Stock Prices", data: [] }] };

    const charts = getFilteredCandlestickData(stockHistoryData, chartDuration);
    return {
      series: [
        {
          name: "Stock Prices",
          data: charts.map((item) => ({
            x: new Date(item.date),
            y: [item.open, item.high, item.low, item.close],
          })),
        },
      ],
    };
  }, [stockHistoryData, chartDuration, isLoading]);

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
