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
  data: {
    allStocks: Stock[];
  };
};

export interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface GetAllNewsResponse {
  data: {
    getAllNews: NewsItem[];
  };
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
              name
              email
            }
          }
        `,
      }),
      transformResponse: (response: GetStockListResponse) =>
        response.data.allStocks,
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
    getAllNews: builder.query<GetAllNewsResponse, void>({
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
    }),
    getSymbols: builder.query<GetAllSymbolsResponse, void>({
      query: () => ({
        document: gql`
          query {
            allStocks {
              symbol
            }
          }
        `,
      }),
    }),
    getWatchlist: builder.query<GetStockListResponse, void>({
      query: () => ({
        document: gql`
          query {
            users {
              id
              name
              email
            }
          }
        `,
      }),
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
