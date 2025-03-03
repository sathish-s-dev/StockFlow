import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router";
import Layout from "./Layout";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFound";

// code splitting using lazy loading components
const FeedArticlePage = lazy(() => import("./pages/FeedArticlePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NewsFeedPage = lazy(() => import("./pages/NewsFeedPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const StockDetails = lazy(() => import("./pages/StockDetailsPage"));
const WatchlistPage = lazy(() => import("./pages/WatchlistPage"));
const WalletPage = lazy(() => import("./pages/WalletPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
      {
        path: "/wallet",
        element: <WalletPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
