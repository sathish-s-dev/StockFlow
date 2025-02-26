import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { IconButton } from "./StockDetailsPage";

export function Carousel() {
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
      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-4 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <PortfolioCard index={index} />
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

function PortfolioCard({ index }: { index: number }) {
  return (
    <div
      key={index}
      className="bg-white dark:bg-dark-foreground min-w-72 p-4 rounded-xl shadow w-64 min-h-40 flex flex-col justify-center items-center"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="size-8 rounded-full"
          />
          <h3 className="text-lg font-semibold mt-2 dark:text-white text-black">
            John Doe
          </h3>
          <p className="text-sm text-dark-foreground dark:text-slate-200">
            Portfolio Manager
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="size-8 rounded-full"
          />
          <h3 className="text-lg font-semibold mt-2 dark:text-white text-black">
            John Doe
          </h3>
          <p className="text-sm text-dark-foreground dark:text-slate-200">
            Portfolio Manager
          </p>
        </div>
      </div>
    </div>
  );
}
