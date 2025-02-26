// Need to use the React-specific entry point to import createApi
import { StockDataResponse } from "@/lib/utils/getFilteredCandlestickData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface alphavantageApiFetchOptions {
  duration: string;
  symbol: string;
}

// Define a service using a base URL and expected endpoints
export const alphaVantageApi = createApi({
  reducerPath: "alphaVantageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query",
  }),
  endpoints: (builder) => ({
    getStockHistory: builder.query<
      StockDataResponse,
      alphavantageApiFetchOptions
    >({
      query: ({ duration, symbol }) => {
        const functionType =
          duration.includes("month") || duration.includes("year")
            ? "TIME_SERIES_WEEKLY_ADJUSTED"
            : "TIME_SERIES_DAILY";

        return {
          url: `?function=${functionType}&symbol=${symbol}&apikey=FW9SKPJTF0LYHO9B`,
        };
      },
      keepUnusedDataFor: 60, // Keep cache for 1 minute
    }),
  }),
});

export const { useGetStockHistoryQuery } = alphaVantageApi;
