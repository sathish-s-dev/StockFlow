const StockCard = () => {
  return (
    <div className="py-4 border-b flex justify-between">
      <div>
        <div className="flex gap-4 items-center">
          <div>
            <img
              src="https://images.financialmodelingprep.com/symbol/AAPL.png"
              className="w-10 invert"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-lg">Adobe</h3>
            <p className="text-sm text-slate-500">Adobe</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold"> &#x24; 201,01</p>
        <p className="text-red-500">- 201,01</p>
      </div>
    </div>
  );
};

export default StockCard;
