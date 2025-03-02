import { Carousel } from "@/components/ui/Carousal";
// import { useGetWatchlistQuery } from "@/services/mockStockApi";
import SectionHeading from "../ui/SectionHeading";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function PortfolioCarousalSection() {
  const watchlist = useSelector((state: RootState) => state.watchlist.watchlistState);

  if (!watchlist) return null;
  return (
    <div className="flex gap-3 flex-col">
      <SectionHeading title="My Porfolio" />
      <Carousel portfolioStocks={watchlist} />
    </div>
  );
}
