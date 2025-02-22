import { stocks } from "@/constants/stocks";
import { Link } from "react-router";
import StockCard from "@/components/home/StockCard";
import StockHistorySelection from "@/components/home/StockHistorySelection";
import ApexChart from "@/components/ui/ApexChart";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StocksTable from "@/components/home/StockTable";

const Home = () => {
  console.log(stocks);

  return (
    <main className="flex flex-col gap-4">
      <div className="px-4 flex flex-col gap-4 max-w-full">
        <div className="grid md:grid-cols-3 gap-4">
          <SectionWrapper className=" flex flex-col gap-2 md:col-span-2">
            <div className=" p-2 flex flex-col gap-2">
              <div className="border-b pb-4 px-2 flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="https://images.financialmodelingprep.com/symbol/AAPL.png"
                      className="w-12 invert dark:invert-0"
                      alt=""
                    />
                  </div>
                  <div>
                    <SectionHeading title="Amazone" />
                    <p className="text-xs text-dark-foreground dark:text-slate-300">AMZ</p>
                  </div>
                </div>
                <div className="flex items-end flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-dark-foreground dark:text-white">201,01</p>
                    <button className="text-xs px-3 py-1 border rounded-full text-dark-foreground dark:text-slate-300">
                      View All
                    </button>
                  </div>
                  <p className="text-xs text-dark-foreground dark:text-slate-300">
                    trend title 70.75% Last update 15.40
                  </p>
                </div>
              </div>
              <StockHistorySelection />
            </div>
            <ApexChart />
          </SectionWrapper>
          <SectionWrapper className="p-6 xl:p-4">
            <SectionTopBar />
            <div className="grid py-4">
              <StockCard />
              <StockCard />
              <StockCard />
              <StockCard />
              <StockCard />
            </div>
          </SectionWrapper>
        </div>
        <SectionWrapper className="p-6 xl:p-4 mb-4">
          <SectionTopBar />
          <div className="overflow-y-scroll">
            <StocksTable />
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
};

function SectionTopBar() {
  return (
    <div className="w-full flex items-center justify-between">
      <SectionHeading title="My Favourite" />
      <Link className="text-sm text-blue-600" to="/">
        See All
      </Link>
    </div>
  );
}

export default Home;
