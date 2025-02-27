// import StocksTable from "@/components/home/StockTable";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BackButton } from "@/components/BackButton";
// import PaginatedTable from "@/components/home/VirtualizedStockList"; "@/components/home/VirtualizedStockList";
import router from "@/router";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const WatchlistPage = () => {
  const watchlist = useSelector((state: RootState) => state.watchlist);
  return (
    <main className="px-4 grid gap-4">
      <SectionWrapper className=" flex gap-4 flex-col">
        <div className="flex gap-4 items-center">
          <BackButton />
          <SectionHeading title="Watchlist" />
        </div>
        <div>
          {/* <StocksTable /> */}
          {/* <PaginatedTable stocks={stocks} /> */}
          {watchlist.watchlistState.length === 0 ? (
            <p className="text-center text-sm">No stocks in watchlist</p>
          ) : (
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
                        <th className="p-3 w-24 hidden md:table-cell">
                          Volume
                        </th>
                        <th className="p-3 text-right w-28 ">Price</th>
                        <th className="p-3 text-end w-40">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {watchlist.watchlistState.map((stock) => (
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
                            <p>{stock.symbol}</p>
                          </td>
                          <td className="p-3 hidden md:table-cell">
                            <p>{stock.company}</p>
                          </td>
                          <td className="p-3 hidden md:table-cell">
                            <p>{stock.volume}</p>
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
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* <SectionWrapper>
        <div>
          <SectionTopBar title="My Favourite" />
          <div className="grid py-4">
            {watchlist.watchlistState.map((stock, index) => (
              <StockCard key={index} stock={stock} />
            ))}
          </div>
        </div>
      </SectionWrapper> */}
    </main>
  );
};

export default WatchlistPage;
