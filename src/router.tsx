import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/HomePage";

// code splitting using lazy loading components
const FeedArticlePage = lazy(() => import("./pages/FeedArticlePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NewsFeedPage = lazy(() => import("./pages/NewsFeedPage"));
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
      {
        path: "/stock/:symbol",
        element: <StockDetails />,
      },
      {
        path: "/watchlist",
        element: <WatchlistPage />,
      },
      {
        path: "/feed",
        element: <NewsFeedPage />,
      },
      {
        path: "/feed/:title",
        element: <FeedArticlePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
