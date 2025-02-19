import { stocks } from "../constants/stocks";

const Home = () => {
  console.log(stocks);

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* {stocks.map((stock) => (
        <div key={stock.symbol} className="bg-white p-4 shadow">
          <p className="text-lg font-bold">{stock.name}</p>
          <p className="text-sm">{stock.exchange}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
