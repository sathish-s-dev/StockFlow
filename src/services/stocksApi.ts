// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";

type Stock = {
  name: string;
  url: string;
};

// Define a service using a base URL and expected endpoints
export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://financialmodelingprep.com/api/v3/",
  }),
  endpoints: (builder) => ({
    getStocks: builder.query<Stock, void>({
      query: () => `stock/list?apikey=ZuYP8g3CCWm1UBvHdq8Cxkfj7SmmvaoX`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStocksQuery } = stocksApi;
