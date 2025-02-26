import yahooFinance from "yahoo-finance2"; // Import the Yahoo Finance SDK

// Define an array of stock symbols for India (NSE)
const topIndianStocks: string[] = [
  "RELIANCE.NS",
  "TCS.NS",
  "HDFCBANK.NS",
  "BHARTIARTL.NS",
  "HINDUNILVR.NS",
  "ICICIBANK.NS",
  "SBIN.NS",
  "HDFC.NS",
  "BAJFINANCE.NS",
  "INFY.NS",
  "KOTAKBANK.NS",
  "ITC.NS",
  "LT.NS",
  "AXISBANK.NS",
  "ASIANPAINT.NS",
  "HCLTECH.NS",
  "MARUTI.NS",
  "SUNPHARMA.NS",
  "WIPRO.NS",
  "ULTRACEMCO.NS",
];

// Function to fetch stock data
export const fetchStockData = async () => {
  try {
    const stockData = await Promise.all(
      topIndianStocks.map((symbol) => yahooFinance.quote(symbol))
    );

    console.log(stockData);
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};

// Call the function
fetchStockData();
