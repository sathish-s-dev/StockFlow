// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { companyProfile } from "@/constants/companyProfile";
// import type { Pokemon } from "./types";

type Stock = {
  name: string;
  url: string;
};

// Define a service using a base URL and expected endpoints
export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://financialmodelingprep.com/",
  }),
  endpoints: (builder) => ({
    getStocksList: builder.query<Stock, void>({
      query: () => `api/v3/stock/list?apikey=0lMQl0A9XQ38MIkuuuoFnSUI5vRXbmz7`,
      keepUnusedDataFor: 10 * 60,
    }),
    getStockQuote: builder.query<Stock, string>({
      query: (symbol) => ({
        url: `stable/quote?symbol=${symbol}&apikey=0lMQl0A9XQ38MIkuuuoFnSUI5vRXbmz7`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
    }),
    getCompanyProfile: builder.query<typeof companyProfile, string>({
      query: (symbol) => ({
        url: `stable/profile?symbol=${symbol}&apikey=0lMQl0A9XQ38MIkuuuoFnSUI5vRXbmz7`,
      }),
      keepUnusedDataFor: 60 * 10, // Cache for 1 day
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStocksListQuery, useGetStockQuoteQuery, useGetCompanyProfileQuery } = stocksApi;
