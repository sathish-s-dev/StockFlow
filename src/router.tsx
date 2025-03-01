import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/HomePage";
import { i } from "node_modules/react-router/dist/development/fog-of-war-BALYJxf_.d.mts";

// code splitting using lazy loading components
const FeedArticlePage = lazy(() => import("./pages/FeedArticlePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NewsFeedPage = lazy(() => import("./pages/NewsFeedPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const StockDetails = lazy(() => import("./pages/StockDetailsPage"));
const WatchlistPage = lazy(() => import("./pages/WatchlistPage"));

import { motion } from "motion/react";
// import StockDetails from "./pages/StockDetails";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, when: "afterChildren" },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 2 } },
};

export function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PageWrapper>
            <Home />
          </PageWrapper>
        ),
      },
      {
        path: "/stock/:symbol",
        element: (
          <PageWrapper>
            <StockDetails />
          </PageWrapper>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <PageWrapper>
            <WatchlistPage />
          </PageWrapper>
        ),
      },
      {
        path: "/feed",
        element: (
          <PageWrapper>
            <NewsFeedPage />
          </PageWrapper>
        ),
      },
      {
        path: "/feed/:title",
        element: (
          <PageWrapper>
            <FeedArticlePage />
          </PageWrapper>
        ),
      },
      {
        path: "/profile",
        element: (
          <PageWrapper>
            <ProfilePage />
          </PageWrapper>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
