import { cn } from "@/lib/utils/cn";
import type { Stock } from "@/types";
import { Link } from "react-router";

const StockCard = ({ stock }: { stock: Stock }) => {
  console.log(stock);

  const changePercentage = +stock.change_percent;
  return (
    <Link
      to={`/stock/${stock.symbol}`}
      className="py-3 px-3 border-b flex justify-between"
    >
      <div>
        <div className="flex gap-2 items-center">
          <div>
            <img
              src={stock.logo}
              className="w-9 invert dark:invert-0"
              alt={stock.company}
            />
          </div>
          <div>
            <h3 className=" text-gray-800 dark:text-white">{stock.company}</h3>
            <p className="text-sm text-gray-500">{stock.symbol}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold dark:text-white">
          {" "}
          &#8377; {stock.current_price}
        </p>
        <p
          className={cn("text-sm text-gray-700 dark:text-gray-100")}
          style={{
            color: changePercentage > 0 ? "#22c55e" : "#ef4444 ",
          }}
        >
          {changePercentage < 0 ? changePercentage : `+${changePercentage}`}%
        </p>
      </div>
    </Link>
  );
};

export default StockCard;
