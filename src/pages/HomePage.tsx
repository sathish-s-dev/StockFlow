import PaginatedTable from "@/components/home/PaginatedTable";
import StockCard from "@/components/home/StockCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { SectionTopbar } from "@/components/home/SectionTopbar";
import {
  useGetCandlestickDataQuery,
  useGetStocksListQuery,
} from "@/services/mockStockApi";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import ChartSection from "@/components/home/ChartSection";
import { PortfolioCarousalSection } from "@/components/home/PortfolioCarousalSection";
import type { Stock } from "@/types";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const dummyStock = {
  id: 1,
  symbol: "RELIANCE",
  company: "Reliance Industries Limited",
  sector: "Energy",
  logo: "https://images.financialmodelingprep.com/symbol/AAPL.png",
  current_price: 2630,
  change: 35,
  change_percent: 1.35,
  market_cap: "15.2T",
  volume: "10.5M",
  pe_ratio: 22.5,
  dividend_yield: 0.8,
};

const Home = () => {
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

  const watchlistStocks = useSelector(
    (state: RootState) => state.watchlist.watchlistState
  );

  console.log(watchlistStocks, "watchlistStocks");

  const {
    isLoading: isStockListLoading,
    data: stocklist,
    isError: isStockListError,
    error: stockListError,
  } = useGetStocksListQuery();

  console.log(isStockListError, stockListError, isStockListLoading, stocklist);

  useEffect(() => {
    if (isStockListLoading) toast.loading("Booting Up Api Server...");
    else toast.dismiss();
  }, [isStockListLoading]);

  const stock = stocklist && stocklist.length > 0 ? stocklist[0] : dummyStock;

  return (
    <main className="flex px-4 flex-col gap-4">
      <PortfolioCarousalSection />
      <div className="grid md:grid-cols-3 gap-4">
        <ChartSection stock={stock} />
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
      <SectionTopbar title="My Favourite" />
      <div className="grid py-4">
        {watchlistStocks.length === 0 && (
          <p className="text-gray-700">
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

function MarketTrendsSection({
  stocks: data,
}: {
  stocks: Stock[] | undefined;
}) {
  return (
    <SectionWrapper className="xl:p-4 mb-4">
      <SectionTopbar title="Market" className="px-4 md:px-2" />
      <div className="overflow-y-scroll min-h-96 py-4 font-semibold">
        {data ? <PaginatedTable stocks={data} /> : <div>loading</div>}
      </div>
    </SectionWrapper>
  );
}
