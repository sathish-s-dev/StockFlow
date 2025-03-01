// import StocksTable from "@/components/home/StockTable";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BackButton } from "@/components/BackButton";
// import PaginatedTable from "@/components/home/VirtualizedStockList"; "@/components/home/VirtualizedStockList";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import PaginatedTable from "@/components/home/PaginatedTable";

const WatchlistPage = () => {
  const watchlist = useSelector(
    (state: RootState) => state.watchlist.watchlistState
  );
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
          {watchlist.length === 0 ? (
            <p className="text-center text-sm">No stocks in watchlist</p>
          ) : (
            <PaginatedTable stocks={watchlist} />
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
