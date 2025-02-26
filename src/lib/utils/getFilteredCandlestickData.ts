interface StockData {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. adjusted close": string;
    "6. volume": string;
    "7. dividend amount": string;
  };
}

export interface StockDataResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Time Zone": string;
  };
  "Monthly Adjusted Time Series"?: StockData;
  "Weekly Adjusted Time Series"?: StockData;
  "Time Series (Daily)"?: StockData;
  "Time Series (5min)"?: StockData;
  "Time Series (15min)"?: StockData;
}
interface CandlestickData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

// export function getFilteredCandlestickData(
//   stockData: StockDataResponse,
//   duration: string
// ): CandlestickData[] {
//   // if (!stockData) {
//   //   console.error("Invalid stock data");
//   //   return [];
//   // }

//   if (
//     !stockData["Monthly Adjusted Time Series"] ||
//     !stockData["Weekly Adjusted Time Series"]
//   ) {
//     console.log(stockData);
//     console.error("Invalid stock data");
//     return [];
//   }

//   const timeSeries: StockData =
//     stockData["Monthly Adjusted Time Series"] ||
//     stockData["Weekly Adjusted Time Series"];

//   console.log(stockData);
//   const today = new Date();

//   // Function to calculate past date based on duration
//   function getPastDate(duration: string): Date {
//     const pastDate = new Date(today);
//     const [amount, unit] = duration.split(" ");

//     switch (unit) {
//       case "day":
//       case "days":
//         pastDate.setDate(today.getDate() - parseInt(amount));
//         break;
//       case "week":
//       case "weeks":
//         pastDate.setDate(today.getDate() - parseInt(amount) * 7);
//         break;
//       case "month":
//       case "months":
//         pastDate.setMonth(today.getMonth() - parseInt(amount));
//         break;
//       case "year":
//       case "years":
//         pastDate.setFullYear(today.getFullYear() - parseInt(amount));
//         break;
//       default:
//         console.log(unit);
//         console.error("Invalid duration format");
//         return today;
//     }
//     return pastDate;
//   }

//   const startDate = getPastDate(duration);

//   const filteredData: CandlestickData[] = Object.entries(timeSeries)
//     .map(([date, values]) => ({
//       date,
//       open: parseFloat(values["1. open"]),
//       high: parseFloat(values["2. high"]),
//       low: parseFloat(values["3. low"]),
//       close: parseFloat(values["4. close"]),
//     }))
//     .filter((entry) => new Date(entry.date) >= startDate) // Filter by duration
//     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort ascending

//   return filteredData;
// }

// export function getFilteredCandlestickData(
//   stockData: StockDataResponse,
//   duration: string
// ): CandlestickData[] {
//   if (!stockData) {
//     console.error("Invalid stock data");
//     return [];
//   }

//   // Determine the appropriate time series based on duration
//   let timeSeries: StockData | undefined;

//   console.log(duration);
//   if (duration.includes("year") || duration.includes("month")) {
//     timeSeries = stockData["Weekly Adjusted Time Series"];
//   } else if (duration.includes("day") || duration.includes("week")) {
//     timeSeries = stockData["Daily Adjusted Time Series"];
//   } else {
//     console.error("Invalid duration format");
//     return [];
//   }

//   if (!timeSeries) {
//     console.error(`Time series data for ${duration} is not available.`);
//     return [];
//   }

//   const today = new Date();

//   function getPastDate(duration: string): Date {
//     const pastDate = new Date(today);
//     const [amount, unit] = duration.split(" ");

//     switch (unit) {
//       case "day":
//       case "days":
//         pastDate.setDate(today.getDate() - parseInt(amount));
//         break;
//       case "week":
//       case "weeks":
//         pastDate.setDate(today.getDate() - parseInt(amount) * 7);
//         break;
//       case "month":
//       case "months":
//         pastDate.setMonth(today.getMonth() - parseInt(amount));
//         break;
//       case "year":
//       case "years":
//         pastDate.setFullYear(today.getFullYear() - parseInt(amount));
//         break;
//       default:
//         console.error("Invalid duration format:", unit);
//         return today;
//     }
//     return pastDate;
//   }

//   const startDate = getPastDate(duration);

//   return Object.entries(timeSeries)
//     .map(([date, values]) => ({
//       date,
//       open: parseFloat(values["1. open"]),
//       high: parseFloat(values["2. high"]),
//       low: parseFloat(values["3. low"]),
//       close: parseFloat(values["4. close"]),
//     }))
//     .filter((entry) => new Date(entry.date) >= startDate) // Filter by date
//     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort ascending
// }

export function getFilteredCandlestickData(
  stockData: StockDataResponse,
  duration: string
): CandlestickData[] {
  if (!stockData) {
    console.error("Invalid stock data");
    return [];
  }

  // Determine the appropriate time series based on duration
  let timeSeries: StockData | undefined;

  console.log(stockData);

  if (duration.includes("year") || duration.includes("month")) {
    console.log("week data");
    timeSeries = stockData["Weekly Adjusted Time Series"];
    console.log(timeSeries);
  } else if (duration.includes("day") || duration.includes("week")) {
    console.log("day data");

    timeSeries = stockData["Time Series (Daily)"];
  } else {
    console.error("Invalid duration format");
    return [];
  }

  if (!timeSeries) {
    console.error(`Time series data for ${duration} is not available.`);
    return [];
  }

  const today = new Date();

  function getPastDate(duration: string): Date {
    const pastDate = new Date(today);
    const [amount, unit] = duration.split(" ");

    switch (unit) {
      case "day":
      case "days":
        pastDate.setDate(today.getDate() - parseInt(amount));
        break;
      case "week":
      case "weeks":
        pastDate.setDate(today.getDate() - parseInt(amount) * 7);
        break;
      case "month":
      case "months":
        pastDate.setMonth(today.getMonth() - parseInt(amount));
        break;
      case "year":
      case "years":
        pastDate.setFullYear(today.getFullYear() - parseInt(amount));
        break;
      default:
        console.error("Invalid duration format:", unit);
        return today;
    }
    return pastDate;
  }

  const startDate = getPastDate(duration);

  return Object.entries(timeSeries)
    .map(([date, values]) => ({
      date,
      open: parseFloat(values["1. open"]),
      high: parseFloat(values["2. high"]),
      low: parseFloat(values["3. low"]),
      close: parseFloat(values["4. close"]),
    }))
    .filter((entry) => new Date(entry.date) >= startDate) // Filter by date
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort ascending
}
