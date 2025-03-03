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

export interface Stock {
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
}

export interface CandlestickData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface Duration {
  key: string;
  value: number;
}

export interface AreaChartData {
  date: string;
  value: number;
}

export interface TResponse<T> {
  message: string;
  success: boolean;
  data: T[];
}
