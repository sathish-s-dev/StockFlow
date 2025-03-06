// // // Need to use the React-specific entry point to import createApi
// // import type {
// //   CandlestickData,
// //   Stock,
// //   TCandlestickResponse,
// //   TStocksResponse,
// // } from "@/types";
// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // // import type { Pokemon } from "./types";

// // Define a service using a base URL and expected endpoints
// export const mockStockApi = createApi({
//   reducerPath: "mockStockApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_PUBLIC_MOCK_API_BASE_URL,
//     prepareHeaders: (headers) => {
//       headers.set("x-api-key", import.meta.env.VITE_PUBLIC_MOCK_API_KEY);
//       return headers;
//     },
//   }),

//   endpoints: (builder) => ({
//     getStocksList: builder.query<Stock[], void>({
//       query: () => `stocks`,
//       keepUnusedDataFor: 10 * 60,
//       transformResponse: (response: TResponse<Stock>) => response.data,
//     }),
//     getStockQuote: builder.query<Stock[], string>({
//       query: (symbol) => ({
//         url: `stocks/${symbol}`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//       transformResponse: (response: TResponse<Stock>) => response.data,
//     }),
//     getSymbols: builder.query<string[], void>({
//       query: () => ({
//         url: `/stocks/symbols`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//       transformResponse: (response: TResponse<string>) => response.data,
//     }),
//     getCandlestickData: builder.query<CandlestickData[], void>({
//       query: () => ({
//         url: `candlestick`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//       transformResponse: (response: TResponse<CandlestickData>) =>
//         response.data,
//     }),
//     getWatchlist: builder.query<Stock[], void>({
//       query: () => ({
//         url: `watchlist`,
//       }),
//       keepUnusedDataFor: 60 * 10, // Cache for 1 day
//       transformResponse: (response: TResponse<Stock>) => response.data,
//     }),
//     addStockToWatchlist: builder.mutation<Stock[], string>({
//       query: (symbol) => ({
//         url: `watchlist/${symbol}`,
//         method: "POST",
//       }),
//       transformResponse: (response: TResponse<Stock>) => response.data,
//     }),
//   }),
// });

// // // Export hooks for usage in functional components, which are
// // // auto-generated based on the defined endpoints
// // export const {
// //   useGetStocksListQuery,
// //   useGetStockQuoteQuery,
// //   useGetSymbolsQuery,
// //   useGetCandlestickDataQuery,
// //   useGetWatchlistQuery,
// // } = mockStockApi;

// // Need to use the React-specific entry point to import createApi
// import type { CandlestickData, Stock, TResponse } from "@/types";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // import type { Pokemon } from "./types";

// // Define a service using a base URL and expected endpoints
// // export const mockStockApi = createApi({
// //   reducerPath: "mockStockApi",
// //   baseQuery: fetchBaseQuery({
// //     baseUrl: import.meta.env.VITE_PUBLIC_MOCK_API_BASE_URL,
// //   }),
// //   endpoints: (builder) => ({
// //     getStocksList: builder.query<Stock[], void>({
// //       query: () => `stocks`,
// //       keepUnusedDataFor: 10 * 60,
// //     }),
// //     getStockQuote: builder.query<Stock[], string>({
// //       query: (symbol) => ({
// //         url: `stocks/?symbol=${symbol}`,
// //       }),
// //       keepUnusedDataFor: 60 * 10, // Cache for 1 day
// //     }),
// //     getSymbols: builder.query<string[], void>({
// //       query: () => ({
// //         url: `symbols`,
// //       }),
// //       keepUnusedDataFor: 60 * 10, // Cache for 1 day
// //     }),
// //     getCandlestickData: builder.query<CandlestickData[], void>({
// //       query: () => ({
// //         url: `candlestick`,
// //       }),
// //       keepUnusedDataFor: 60 * 10, // Cache for 1 day
// //     }),
// //     getWatchlist: builder.query<Stock[], void>({
// //       query: () => ({
// //         url: `watchlist`,
// //       }),
// //       keepUnusedDataFor: 60 * 10, // Cache for 1 day
// //     }),
// //   }),
// // });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const {
//   useGetStocksListQuery,
//   useGetStockQuoteQuery,
//   useGetSymbolsQuery,
//   useGetCandlestickDataQuery,
//   useGetWatchlistQuery,
// } = mockStockApi;

import { Stock } from "@/types";
import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

const GRAPHQL_ENDPOINT = import.meta.env.VITE_PUBLIC_MOCK_API_BASE_URL;

const graphqlBaseQuery: BaseQueryFn<
  { document: string; variables?: Record<string, string | number> },
  unknown,
  { status: number; message: string }
> = async ({ document, variables }) => {
  try {
    const data = await request(GRAPHQL_ENDPOINT, document, variables);
    return { data };
  } catch (error) {
    if (error instanceof ClientError) {
      return {
        error: { status: error.response.status, message: error.message },
      };
    }
    return { error: { status: 500, message: "Unknown error" } };
  }
};

type GetStockListResponse = {
  allStocks: Stock[];
};

export interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface GetAllNewsResponse {
  getAllNews: NewsItem[];
}
export interface GetAllSymbolsResponse {
  data: {
    allStocks: Stock[];
  };
}

export const mockStockApi = createApi({
  reducerPath: "mockStockApi",
  baseQuery: graphqlBaseQuery,
  endpoints: (builder) => ({
    getStocksList: builder.query<Stock[], void>({
      query: () => ({
        document: gql`
          query {
            allStocks {
              id
              change_percent
              company
              symbol
              logo
              dividend_yield
              current_price
              market_cap
              pe_ratio
              change
              volume
            }
          }
        `,
      }),
      transformResponse: (response: GetStockListResponse) => response.allStocks,
    }),
    getStockQuote: builder.query<GetStockListResponse, void>({
      query: () => ({
        document: gql`
          query {
            allStocks {
              id
              name
              email
            }
          }
        `,
      }),
    }),
    getAllNews: builder.query<NewsItem[], void>({
      query: () => ({
        document: gql`
          query getAllNews {
            getAllNews {
              id
              image
              title
              description
            }
          }
        `,
      }),
      transformResponse: (response: GetAllNewsResponse) => response.getAllNews,
    }),
    getSymbols: builder.query<string[], void>({
      query: () => ({
        document: gql`
          query {
            allStocks {
              symbol
            }
          }
        `,
      }),
      transformResponse: (response: GetStockListResponse) =>
        response.allStocks.map((symbol) => symbol.symbol),
    }),
    getWatchlist: builder.query<Stock[], void>({
      query: () => ({
        document: gql`
          query {
            allStocks {
              id
              change_percent
              company
              symbol
              logo
              dividend_yield
              current_price
              market_cap
              pe_ratio
              change
              volume
            }
          }
        `,
      }),
      transformResponse: (response: GetStockListResponse) => response.allStocks,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetStocksListQuery,
  useGetStockQuoteQuery,
  useGetSymbolsQuery,
  // useGetCandlestickDataQuery,
  useGetWatchlistQuery,
} = mockStockApi;
