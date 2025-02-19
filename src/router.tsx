import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
