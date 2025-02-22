import ApexChart from "@/components/ui/ApexChart";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { addToWatchlist } from "@/features/watchlistSlice";
import router from "@/router";
import { RootState } from "@/store/store";
import { ChevronLeft, Plus } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const StockDetails = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector(
    (state: RootState) => state.watchlist.watchlistState
  );

  console.log(watchlist);

  return (
    <div className="grid gap-4 p-4 px-8">
      <div className="flex gap-2 items-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2 items-center">
            <BackButton />
            <img
              src="https://images.financialmodelingprep.com/symbol/AAPL.png"
              alt="logo"
              className="w-14 invert"
            />
            <div>
              <SectionHeading title="Apple" />
              <p className="text-sm">4.5 + 201,01</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                const details = dispatch(addToWatchlist("AAPL"));
                console.log(details);
                toast.success("Stock added to watchlist");
              }}
              className="flex gap-1 items-center px-4 py-1 border bg-white text-slate-600 rounded-md text-sm"
            >
              <Plus className="w-4 h-4" /> Watchlist
            </button>
          </div>
        </div>
      </div>
      <SectionWrapper>
        <div>
          <h1>Stock Details</h1>
        </div>
      </SectionWrapper>
      <SectionHeading title="Chart"></SectionHeading>
      <SectionWrapper>
        <ApexChart />
      </SectionWrapper>
    </div>
  );
};

export default StockDetails;

function BackButton() {
  return (
    <button
      onClick={() => router.navigate(-1)}
      className="flex items-center rounded-full justify-center size-8  bg-white shadow-xl"
    >
      <ChevronLeft />
    </button>
  );
}
