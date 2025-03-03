import { filterData } from "@/lib/utils/filterData";
import formatCandlestickData from "@/lib/utils/formatCandlestickData";
import { useGetCandlestickDataQuery } from "@/services/mockStockApi";
import type { Stock } from "@/types";
import { useState } from "react";
import HomeChart from "../ui/HomeChart";
import SectionHeading from "../ui/SectionHeading";
import SectionWrapper from "../ui/SectionWrapper";
import StockHistorySelection from "./StockHistorySelection";
import Text from "../ui/Text";

function ChartSection({ stock }: { stock: Stock }) {
  const [chartDuration, setChartDuration] = useState({
    key: "1M",
    value: 30,
  });
  // const [symbol] = useState("AAPL");

  const { data: candlestick, isLoading: isCandleLoading } =
    useGetCandlestickDataQuery();

  console.log(candlestick, isCandleLoading, "candlestick");
  const closeData = candlestick?.map(formatCandlestickData);

  const dataValue = filterData(closeData, chartDuration.value);

  console.log(dataValue);

  return (
    <SectionWrapper className=" flex flex-col gap-2 md:col-span-2">
      <div className=" p-2 flex flex-col gap-2">
        <div className="border-b pb-4 px-2 flex justify-between gap-6 flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={stock.logo}
                className="w-12 invert dark:invert-0"
                alt={stock.company}
              />
            </div>
            <div>
              <SectionHeading title={stock.company} />
              <p className="text-xs text-dark-foreground dark:text-gray-300">
                {stock.symbol}
              </p>
            </div>
          </div>
          <div className="flex md:items-end flex-col">
            <div className="flex items-center gap-2">
              <Text className="text-2xl font-bold">
                &#8377; {stock.current_price}
              </Text>
              <button className="text-xs px-3 py-1 border rounded-full text-dark-foreground dark:text-gray-300">
                View All
              </button>
            </div>
            <Text className="text-xs dark:text-gray-300">
              trend title {stock.change_percent.toFixed(2)}% Last update 03:15
            </Text>
          </div>
        </div>
        <StockHistorySelection
          chartDuration={chartDuration}
          setChartDuration={setChartDuration}
        />
      </div>
      <HomeChart duration={chartDuration.value} />
    </SectionWrapper>
  );
}

export default ChartSection;
