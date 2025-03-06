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

type GetStockQuoteResponse = {
  stock: Stock;
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
    getStockQuote: builder.query<Stock, string>({
      query: (symbol: string) => ({
        document: gql`
          query ($symbol: String!) {
            stock(symbol: $symbol) {
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
        variables: { symbol },
      }),
      transformResponse: (response: GetStockQuoteResponse) => response.stock,
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
