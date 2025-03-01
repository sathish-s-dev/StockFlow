import PaginatedTable from "@/components/home/PaginatedTable";
import SectionTopBar from "@/components/home/SectionTopBar";
import StockCard from "@/components/home/StockCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import {
  useGetCandlestickDataQuery,
  useGetStocksListQuery,
  useGetWatchlistQuery,
} from "@/services/mockStockApi";

import ChartSection from "@/components/home/ChartSection";
import { PortfolioCarousalSection } from "@/components/home/PortfolioCarousalSection";
import { Stock } from "@/types";
import SLoadingScreen from "./LoadingPage";
import toast from "react-hot-toast";

// todo
// my portfolio card i have to change
// my favourite data to home page map
// stock details page complete
// complete news feed

// Function to Filter Data Based on Range

const Home = () => {
  // console.log(stocks);

  const { data: candlestick, isLoading: isCandleLoading } =
    useGetCandlestickDataQuery();

  console.log(candlestick, isCandleLoading, "candlestick");
  const closeData = candlestick?.map((item) => {
    return {
      close: item.close,
      date: item.date,
    };
  });

  console.log(closeData, "closeData");

  const {
    data: watchlistStocks,
    isLoading: isWatchlistLoading,
    isError: isWatchlistError,
  } = useGetWatchlistQuery();

  console.log(watchlistStocks, "watchlistStocks");

  const { isLoading: isStockListLoading, data: stocklist } =
    useGetStocksListQuery();

  if (isWatchlistLoading || isStockListLoading) return <SLoadingScreen />;

  if (!stocklist) return null;

  if (isWatchlistError) {
    toast.error("Something went wrong");
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <main className="flex px-4 flex-col gap-4">
      <PortfolioCarousalSection />
      <div className="grid md:grid-cols-3 gap-4">
        <ChartSection stock={stocklist[0]} />
        <MyFavouritesSection />
      </div>
      <MarketTrendsSection stocks={stocklist} />
    </main>
  );
};

export default Home;

function MyFavouritesSection() {
  const watchlistStocks = useSelector(
    (state: RootState) => state.watchlist.watchlistState || []
  );

  return (
    <SectionWrapper className="p-6 xl:p-4">
      <SectionTopBar title="My Favourite" />
      <div className="grid py-4">
        {watchlistStocks.length === 0 && (
          <p className="text-slate-700">
            No Stocks Available in Please Add stocks in Favourites
          </p>
        )}
        {watchlistStocks.map((stock, index) => (
          <StockCard key={index} stock={stock} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function MarketTrendsSection({ stocks: data }: { stocks: Stock[] }) {
  return (
    <SectionWrapper className="xl:p-4 mb-4">
      <SectionTopBar title="Market" className="px-4 md:px-2" />
      <div className="overflow-y-scroll min-h-96 py-4 font-semibold">
        <PaginatedTable stocks={data} />
      </div>
    </SectionWrapper>
  );
}
