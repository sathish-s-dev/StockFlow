import { Carousel } from "@/components/ui/Carousal";
import { useGetWatchlistQuery } from "@/services/mockStockApi";
import SectionHeading from "../ui/SectionHeading";

export function PortfolioCarousalSection() {
  const { data: watchlist } = useGetWatchlistQuery();

  if (!watchlist) return null;
  return (
    <div className="flex gap-3 flex-col">
      <SectionHeading title="My Porfolio" />
      <Carousel portfolioStocks={watchlist} />
    </div>
  );
}
