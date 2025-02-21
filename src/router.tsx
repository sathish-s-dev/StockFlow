import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/HomePage";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/LoginPage"));
const StockDetails = lazy(() => import("./pages/StockDetailsPage"));
const WatchlistPage = lazy(() => import("./pages/WatchlistPage"));
// import StockDetails from "./pages/StockDetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/stock/:symbol", element: <StockDetails /> },
      { path: "/watchlist", element: <WatchlistPage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback="loading...  ">
        <Login />
      </Suspense>
    ),
  },
]);

export default router;
