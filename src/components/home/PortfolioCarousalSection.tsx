import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SectionHeading from "../ui/SectionHeading";
import { Carousel } from "@/pages/Carousal";

export function PortfolioCarousalSection() {
  const watchlist = useSelector(
    (state: RootState) => state.watchlist.watchlistState
  );
  return (
    <div className="px-4">
      <SectionHeading title="My Porfolio" />
      <Carousel portfolioStocks={watchlist} />
    </div>
  );
}
