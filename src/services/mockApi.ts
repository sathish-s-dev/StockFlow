// Need to use the React-specific entry point to import createApi
import { CandlestickData, Stock } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getStocksList: builder.query<Stock[], void>({
      query: () => `stocks`,
      keepUnusedDataFor: 10 * 60,
    }),
    getStockQuote: builder.query<Stock[], string>({
      query: (symbol) => ({
        url: `stocks/?symbol=${symbol}`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
    }),
    getSymbols: builder.query<string[], void>({
      query: () => ({
        url: `symbols`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
    }),
    getCandlestickData: builder.query<CandlestickData[], void>({
      query: () => ({
        url: `candlestick`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetStocksListQuery,
  useGetStockQuoteQuery,
  useGetSymbolsQuery,
  useGetCandlestickDataQuery,
} = mockApi;
