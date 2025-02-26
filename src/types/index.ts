export interface NewsArticle {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string;
  source: string;
  topics: { topic: string; relevance_score: string }[];
  overall_sentiment_label: string;
  ticker_sentiment: { ticker: string; ticker_sentiment_label: string }[];
}

// export interface Stock {
//   symbol: string;
//   name: string;
//   price: number;
//   exchange: string;
//   exchangeShortName: string;
//   type: string;
// }

export interface SingleStockQuote {
  symbol: string;
  name: string;
  price: number;
  changePercentage: number;
  change: number;
  volume: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  exchange: string;
  open: number;
  previousClose: number;
  timestamp: number;
}

export type Stock = {
  symbol: string;
  company: string;
  sector: string;
  logo: string;
  current_price: number;
  change: number;
  change_percent: number;
  market_cap: string;
  volume: string;
  pe_ratio: number;
  dividend_yield: number;
  candlestick_data: {
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
    "adjusted close": string;
    volume: string;
    "dividend amount": string;
    "split coefficient": string;
  }[];
};

export type CandlestickData = {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  "adjusted close": string;
  volume: string;
  "dividend amount": string;
  "split coefficient": string;
};
