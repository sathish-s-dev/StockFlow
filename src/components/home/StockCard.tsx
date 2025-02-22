const StockCard = () => {
  return (
    <div className="py-3 px-3 border-b flex justify-between">
      <div>
        <div className="flex gap-2 items-center">
          <div>
            <img
              src="https://images.financialmodelingprep.com/symbol/AAPL.png"
              className="w-9 invert dark:invert-0"
              alt=""
            />
          </div>
          <div>
            <h3 className=" text-slate-800 dark:text-white">Adobe</h3>
            <p className="text-sm text-slate-500">Adobe</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold dark:text-white"> &#x24; 201,01</p>
        <p className="text-red-500">- 201,01</p>
      </div>
    </div>
  );
};

export default StockCard;
