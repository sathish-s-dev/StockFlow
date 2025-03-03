import stockSymbols from "@/constants/stockSymbols";
import router from "@/router";
import type { Stock } from "@/types";

// import { AutoSizer, List, ListRowProps } from "react-virtualized";

// import "react-virtualized/styles.css";

// const heading = {
//   symbol: "symbol",
//   name: "name",
//   price: "price",
//   exchange: "exchange",
//   exchangeShortName: "exchangeShortName",
//   type: "type",
// };

import { useState } from "react";
import { SmallAreaChart } from "../ui/SmallAreaChart";
import {
  smallChartDataDecrease,
  smallChartDataIncrease,
} from "@/constants/smallChartData";
import { Pagination } from "../ui/Pagination";

interface TableProps {
  stocks: Stock[] | undefined;
}

const PaginatedTable = ({ stocks }: TableProps) => {
  const rowsPerPage = 5;

  console.log(stocks, "stocks");
  const [currentPage, setCurrentPage] = useState(1);

  if (!stocks) return <div>stocks not available</div>;

  const totalPages = Math.ceil(stocks.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentStocks = stocks.slice(startIndex, startIndex + rowsPerPage);

  const stockList = stocks.filter((item) => {
    console.log(stockSymbols.includes(item.symbol));
    return stockSymbols.includes(item.symbol);
  });

  console.log("stocks list", stockList);

  return (
    <div className="border-base-content/25 w-full overflow-x-auto font-ibm_plex">
      <div className="p-1 w-full sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto flex flex-col justify-between">
          <div className="min-h-[400px]">
            <table className="min-w-full text-xs md:text-sm">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:text-white">
                <tr className="text-left w-full border-b space-x-4">
                  <th className="p-2 w-2/4 md:w-28">Symbol</th>
                  <th className="p-2 w-[250px]  hidden md:table-cell">Name</th>
                  <th className="p-2 w-32  hidden md:table-cell"></th>
                  <th className="p-2 w-24 hidden md:table-cell">Market Cap</th>
                  <th className="p-2 text-right w-28 ">Price</th>
                  <th className="p-2 text-end md:w-40 w-48">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentStocks.map((stock, index) => (
                  <tr
                    key={stock.symbol}
                    onClick={() => {
                      router.navigate(
                        `/stock/${encodeURIComponent(stock.symbol)}`
                      );
                    }}
                    className="border-b border-opacity-20 max-h-10  dark:border-gray-300 hover:cursor-pointer dark:bg-dark-foreground hover:opacity-90 text-gray-700 dark:text-gray-200"
                  >
                    <td className="p-2">
                      <div className="flex items-center gap-1">
                        <img
                          src={stock.logo}
                          className="size-6 rounded-full invert dark:invert-0"
                        />
                        <p>{stock.symbol}</p>
                      </div>
                    </td>
                    <td className="p-2 hidden md:table-cell">
                      <p>{stock.company}</p>
                    </td>
                    <td className="p-2 hidden w-32 md:table-cell">
                      <SmallAreaChart
                        index={index}
                        dataKey="value"
                        chartData={
                          index % 2 === 0
                            ? smallChartDataDecrease
                            : smallChartDataIncrease
                        }
                      />
                    </td>
                    <td className="p-2 hidden md:table-cell">
                      <p>{stock.market_cap}</p>
                    </td>

                    <td className="p-2 text-right">
                      <p>&#8377; {stock.current_price}</p>
                    </td>
                    <td className="p-2 text-right">
                      <button className="md:px-3 px-1.5 py-1 border font-semibold rounded-md dark:bg-green-600 dark:text-gray-50">
                        <span>Get Started</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginatedTable;
