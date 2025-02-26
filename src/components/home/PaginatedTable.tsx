import stockSymbols from "@/constants/stockSymbols";
import router from "@/router";
import { Stock } from "@/types";

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
    <div className="border-base-content/25 w-full overflow-x-auto border">
      <div className="p-2 w-full sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto min-h-[400px] flex flex-col justify-between">
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
              <tr className="text-left w-full border-b">
                <th className="p-3 w-full md:w-28">Symbol</th>
                <th className="p-3 w-  hidden md:table-cell">Name</th>
                <th className="p-3 w-24 hidden md:table-cell">Market Cap</th>
                <th className="p-3 text-right w-28 ">Price</th>
                <th className="p-3 text-end w-40">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentStocks.map((stock) => (
                <tr
                  key={stock.symbol}
                  onClick={() => {
                    router.navigate(
                      `/stock/${encodeURIComponent(stock.symbol)}`
                    );
                  }}
                  className="border-b border-opacity-20 dark:border-gray-300 hover:cursor-pointer bg-white dark:bg-dark-foreground hover:opacity-90 text-slate-700 dark:text-slate-200"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      <img
                        src={stock.logo}
                        className="size-6 rounded-full invert"
                      />
                      <p>{stock.symbol}</p>
                    </div>
                  </td>
                  <td className="p-3 hidden md:table-cell">
                    <p>{stock.company}</p>
                  </td>
                  <td className="p-3 hidden md:table-cell">
                    <p>{stock.market_cap}</p>
                  </td>

                  <td className="p-3 text-right">
                    <p>${stock.current_price}</p>
                  </td>
                  <td className="p-3 text-right">
                    <button className="px-3 py-1 border font-semibold rounded-md dark:bg-green-600 dark:text-gray-50">
                      <span>Get Started</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-800">
      <button
        title="previous"
        type="button"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="inline-flex items-center disabled:cursor-not-allowed disabled:bg-slate-300 justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        type="button"
        title="Page 1"
        className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-green-600 dark:border-green-600"
      >
        {currentPage}
      </button>

      <button
        title="next"
        type="button"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="inline-flex items-center disabled:cursor-not-allowed disabled:bg-slate-300 justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
