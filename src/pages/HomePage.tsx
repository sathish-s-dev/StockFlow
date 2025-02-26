import PaginatedTable from "@/components/home/PaginatedTable";
import SectionTopBar from "@/components/home/SectionTopBar";
import StockCard from "@/components/home/StockCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Carousel } from "./Carousal";
// import { fetchStockData } from "@/constants/stockQoute";
// import { stocks1 } from "@/constants/stocks";
import {
  useGetCandlestickDataQuery,
  useGetStocksListQuery,
} from "@/services/mockApi";

import ChartSection from "@/components/home/ChartSection";

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

  const watchlistStocks = useSelector(
    (state: RootState) => state.watchlist.watchlistState || []
  );

  const { isLoading, data } = useGetStocksListQuery();

  if (!data) return null;

  console.log(isLoading, data);

  return (
    <main className="flex flex-col gap-4">
      <PortfolioCarousalSection />
      <div className="px-4 flex flex-col gap-4 max-w-full">
        <div className="grid md:grid-cols-3 gap-4">
          <ChartSection stock={data[0]} />
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
        </div>
        <SectionWrapper className="p-6 xl:p-4 mb-4">
          <SectionTopBar title="Market" />
          <div className="overflow-y-scroll min-h-96 py-4 font-semibold">
            <PaginatedTable stocks={data} />
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
};

export default Home;


function PortfolioCarousalSection() {
  return (
    <div className="px-4">
      <SectionHeading title="My Porfolio" />
      <Carousel />
    </div>
  );
}
