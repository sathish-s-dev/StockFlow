import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login"));

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
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
