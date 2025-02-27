import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { IconButton } from "@/components/IconButton";
import { Stock } from "@/types";

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

  return (
    <div className="relative flex items-center w-full pt-3">
      {/* Scrollable Container */}
      <div className="w-full overflow-hidden px-16">
        <div
          className="flex space-x-4 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
        >
          {portfolioStocks.map((stock, index) => (
            <PortfolioCard key={index} index={index} stock={stock} />
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
    </div>
  );
}

function PortfolioCard({ index, stock }: { index: number; stock: Stock }) {
  return (
    <div
      key={index}
      className="bg-white dark:bg-dark-foreground min-w-72 p-4 rounded-xl shadow w-64 min-h-40 flex flex-col justify-center items-center"
    >
      <div className="flex h-full flex-col items-start border w-full">
        <div className="flex items-center gap-2">
          <img src={stock.logo} alt="User" className="size-10 rounded-full invert" />
          <div className="flex flex-col">
            <h3 className=" font-semibold mt-2 dark:text-white text-black">
              {stock.company}
            </h3>
            <p className="text-xs text-dark-foreground dark:text-slate-200">
              {stock.symbol}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p>&#8377; {stock.current_price}</p>
        </div>
      </div>
    </div>
  );
}
