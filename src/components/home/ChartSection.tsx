import { useGetCandlestickDataQuery } from "@/services/mockApi";
import { Stock } from "@/types";
import dayjs from "dayjs";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionHeading from "../ui/SectionHeading";
import SectionWrapper from "../ui/SectionWrapper";
import StockHistorySelection from "./StockHistorySelection";
import { filterData } from "@/lib/utils/filterData";

function ChartSection({ stock }: { stock: Stock }) {
  const [chartDuration, setChartDuration] = useState({
    key: "1 month",
    value: 30,
  });
  // const [symbol] = useState("AAPL");

  const { data: candlestick, isLoading: isCandleLoading } =
    useGetCandlestickDataQuery();

  console.log(candlestick, isCandleLoading, "candlestick");
  const closeData = candlestick?.map((item) => {
    return {
      close: item.close,
      date: dayjs(item.date).format("MM-DD"),
      low: item.low,
      high: item.high,
    };
  });

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
              <p className="text-xs text-dark-foreground dark:text-slate-300">
                {stock.symbol}
              </p>
            </div>
          </div>
          <div className="flex md:items-end flex-col">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-dark-foreground dark:text-white">
                &#8377; {stock.current_price}
              </p>
              <button className="text-xs px-3 py-1 border rounded-full text-dark-foreground dark:text-slate-300">
                View All
              </button>
            </div>
            <p className="text-xs text-dark-foreground dark:text-slate-300">
              trend title {stock.change_percent.toFixed(2)}% Last update 03:15
              {/* {dayjs(stock.date).format("hh:mm")} */}
            </p>
          </div>
        </div>
        <StockHistorySelection
          chartDuration={chartDuration}
          setChartDuration={setChartDuration}
        />
      </div>
      {/* <ApexChart
        symbol={symbol}
        chartDuration={chartDuration}
        setChartDuration={setChartDuration}
      /> */}
      <ResponsiveContainer width={"100%"} height={250}>
        <AreaChart
          data={dataValue}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            label={"close"}
            dataKey="close"
            stackId="1"
            max={400}
            stdDeviation={25}
            baseLine={50}
            stroke="#00ff00"
            fill="#00ff0050"
            dot={true}
          />

          {/* <Area
            type="monotone"
            dataKey="high"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
         
          <Area
            type="monotone"
            dataKey="low"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          /> */}

          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis dataKey={"close"} />
        </AreaChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer width={"100%"} height={250}>
        <LineChart data={dataValue}>
          <Line
            type="monotoneX"
            stopColor="#00ff0f"
            label={"close"}
            dataKey="close"
            stroke="#000"
            fill="#f0ff00"
          />

          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis dataKey={"close"} />
        </LineChart>
      </ResponsiveContainer> */}
    </SectionWrapper>
  );
}

export default ChartSection;
