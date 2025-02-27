import StockHistorySelection from "@/components/home/StockHistorySelection";
import ApexChart from "@/components/ui/ApexChart";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { addToWatchlist } from "@/features/watchlistSlice";
import { cn } from "@/lib/utils/cn";
import type { RootState } from "@/store/store";
import { useState } from "react";
import { Plus } from "react-feather";
// import toast from "react-hot-toast";
import { useGetStockQuoteQuery } from "@/services/mockApi";
import type { Duration } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BackButton } from "@/components/BackButton";

const StockDetails = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector(
    (state: RootState) => state.watchlist.watchlistState
  );

  const [chartDuration, setChartDuration] = useState<Duration>({
    key: "1 month",
    value: 30,
  });

  console.log(watchlist);

  const params = useParams<{ symbol?: string }>();

  console.log(params?.symbol);

  // const [singleStockQuote] = stockQuote;

  const { data } = useGetStockQuoteQuery(params?.symbol || "AAPL");

  console.log(data, "data");

  if (!data) return null;

  const changePercentage = +data[0].change_percent.toFixed(2);

  // console.log(changePercentage < 0);

  // const priceRange = data[0].range.split("-");

  return (
    <div className="grid gap-4 p-4 px-8">
      <div className="flex gap-2 items-center">
        <div className="flex justify-between w-full gap-4 md:items-center flex-col md:flex-row">
          <div className="flex gap-2 items-center">
            <BackButton />
            <img src={data[0].logo} alt="logo" className="w-14 invert" />
            <div>
              <SectionHeading title={data[0].company} />
              <p
                className={cn("text-sm text-slate-700 dark:text-slate-100")}
                style={{
                  color: changePercentage > 0 ? "#22c55e" : "#ef4444 ",
                }}
              >
                {changePercentage < 0
                  ? changePercentage
                  : `+${changePercentage}`}
                %
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                const details = dispatch(addToWatchlist(data[0]));
                console.log(details);
              }}
              className="flex gap-1 items-center px-4 py-1 border bg-white text-slate-600 rounded-md text-sm"
            >
              <Plus className="w-4 h-4" /> Watchlist
            </button>
          </div>
        </div>
      </div>
      <SectionWrapper>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between p-4">
          <div className="flex flex-col gap-2 text-slate-900 dark:text-slate-100">
            <p className="text-sm">Market Cap</p>
            <p className="text-xl">&#36; {data[0].market_cap}</p>
            <p></p>
          </div>
          <div className="flex flex-col gap-2 text-slate-900 dark:text-slate-100">
            <p className="text-sm">Volueme</p>
            <p className="text-xl">{data[0].volume}</p>
          </div>
          <div className="flex flex-col gap-2 text-slate-900 dark:text-slate-100">
            <p className="text-sm">Fully Dilutted Market Cap</p>
            <p className="text-xl">&#36; {data[0].market_cap}</p>
          </div>
          <div className="flex flex-col gap-2 text-slate-900 dark:text-slate-100">
            <p className="text-sm">Market Price</p>
            <p className="text-xl">&#36; {data[0].current_price}</p>
          </div>
        </div>
      </SectionWrapper>
      <SectionHeading title="Chart"></SectionHeading>
      <SectionWrapper>
        <StockHistorySelection
          chartDuration={chartDuration}
          setChartDuration={setChartDuration}
        />
        <ApexChart
          symbol="TSLA"
          chartDuration={chartDuration}
          setChartDuration={setChartDuration}
        />
      </SectionWrapper>
    </div>
  );
};

export default StockDetails;
