import { IconButton } from "@/components/IconButton";
import {} from "@/components/ui/HomeChart";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { SmallAreaChart } from "@/components/ui/SmallAreaChart";

import {
  smallChartDataIncrease,
  smallChartDataDecrease,
} from "@/constants/smallChartData";
import { cn } from "@/lib/utils/cn";
import { useGetStocksListQuery } from "@/services/mockStockApi";
import { Stock } from "@/types";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export function Carousel({ portfolioStocks }: { portfolioStocks: Stock[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 10;
  const itemWidth = 300; // Width of one card (includes margin)
  const maxIndex = totalItems - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0)); // Prevent overflow
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex - 3)); // Prevent overflow
  };

  const { data: stocks } = useGetStocksListQuery();

  if (!stocks) {
    return <div>Loading...</div>;
  }

  return (
    <SectionWrapper className="relative flex items-center w-full pt-3 ">
      {/* Scrollable Container */}
      <div className="w-full overflow-hidden md:px-16 px-4  py-4">
        <div
          className="flex space-x-4 transition-transform duration-300 min-h-32"
          style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
        >
          {portfolioStocks.length === 0
            ? Array.from({ length: 3 }).map((_, index) => (
                <PortfolioCard
                  currentIndex={currentIndex}
                  key={index}
                  index={index}
                  stock={stocks[0]}
                />
              ))
            : portfolioStocks.map((stock, index) => (
                <PortfolioCard
                  key={index}
                  currentIndex={currentIndex}
                  index={index}
                  stock={stock}
                />
              ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <IconButton
        handleClick={handlePrev}
        className="absolute left-4 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        handleClick={handleNext}
        className="absolute right-4 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight />
      </IconButton>
    </SectionWrapper>
  );
}

function PortfolioCard({
  index,
  stock,
  currentIndex,
}: {
  index: number;
  stock: Stock;
  currentIndex: number;
}) {
  return (
    <div
      key={index}
      className={cn(
        "dark:bg-dark-foreground min-w-72 px-6 py-3   rounded-xl shadow w-64 min-h-40 flex flex-col justify-center items-center",
        currentIndex === index
          ? "shadow-md shadow-[#f6c13b] dark:shadow-[#f6c13b]"
          : "bg-[#ffffff]"
      )}
    >
      <div className="flex h-full flex-col items-start w-full ">
        <div className="flex items-center gap-2 h-full">
          <img
            src={stock.logo}
            alt="User"
            className="size-10 rounded-full invert dark:invert-0"
          />
          <div className="flex flex-col">
            <p className="text-xl text-dark-foreground dark:text-slate-200">
              {stock.symbol}
            </p>
            <p className="text-xs text-dark-foreground dark:text-slate-200">
              {stock.company}
            </p>
          </div>
        </div>
        <div className="flex h-full w-full justify-between items-center">
          <div>
            <p className="font-semibold text-2xl dark:text-white">
              &#8377; {stock.current_price}
            </p>
          </div>
          <div>
            <SmallAreaChart
              dataKey="value"
              index={index}
              chartData={
                index % 2 === 0
                  ? smallChartDataDecrease
                  : smallChartDataIncrease
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
