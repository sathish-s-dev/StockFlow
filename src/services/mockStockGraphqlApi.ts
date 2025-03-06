// // Need to use the React-specific entry point to import createApi
// import type {
//   CandlestickData,
//   Stock,
//   TCandlestickResponse,
//   TStocksResponse,
// } from "@/types";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const mockStockApi = createApi({
  reducerPath: "mockStockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PUBLIC_MOCK_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("x-api-key", import.meta.env.VITE_PUBLIC_MOCK_API_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getStocksList: builder.query<Stock[], void>({
      query: () => `stocks`,
      keepUnusedDataFor: 10 * 60,
      transformResponse: (response: TResponse<Stock>) => response.data,
    }),
    getStockQuote: builder.query<Stock[], string>({
      query: (symbol) => ({
        url: `stocks/${symbol}`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
      transformResponse: (response: TResponse<Stock>) => response.data,
    }),
    getSymbols: builder.query<string[], void>({
      query: () => ({
        url: `/stocks/symbols`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
      transformResponse: (response: TResponse<string>) => response.data,
    }),
    getCandlestickData: builder.query<CandlestickData[], void>({
      query: () => ({
        url: `candlestick`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
      transformResponse: (response: TResponse<CandlestickData>) =>
        response.data,
    }),
    getWatchlist: builder.query<Stock[], void>({
      query: () => ({
        url: `watchlist`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
      transformResponse: (response: TResponse<Stock>) => response.data,
    }),
    addStockToWatchlist: builder.mutation<Stock[], string>({
      query: (symbol) => ({
        url: `watchlist/${symbol}`,
        method: "POST",
      }),
      transformResponse: (response: TResponse<Stock>) => response.data,
    }),
  }),
});

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const {
//   useGetStocksListQuery,
//   useGetStockQuoteQuery,
//   useGetSymbolsQuery,
//   useGetCandlestickDataQuery,
//   useGetWatchlistQuery,
// } = mockStockApi;

// Need to use the React-specific entry point to import createApi
import type { CandlestickData, Stock, TResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
// export const mockStockApi = createApi({
//   reducerPath: "mockStockApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_PUBLIC_MOCK_API_BASE_URL,
//   }),
//   endpoints: (builder) => ({
//     getStocksList: builder.query<Stock[], void>({
//       query: () => `stocks`,
//       keepUnusedDataFor: 10 * 60,
//     }),
//     getStockQuote: builder.query<Stock[], string>({
//       query: (symbol) => ({
//         url: `stocks/?symbol=${symbol}`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//     }),
//     getSymbols: builder.query<string[], void>({
//       query: () => ({
//         url: `symbols`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//     }),
//     getCandlestickData: builder.query<CandlestickData[], void>({
//       query: () => ({
//         url: `candlestick`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//     }),
//     getWatchlist: builder.query<Stock[], void>({
//       query: () => ({
//         url: `watchlist`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//     }),
//   }),
// });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetStocksListQuery,
  useGetStockQuoteQuery,
  useGetSymbolsQuery,
  useGetCandlestickDataQuery,
  useGetWatchlistQuery,
} = mockStockApi;
