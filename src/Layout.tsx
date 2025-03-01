import { Outlet } from "react-router";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavBar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <div className=" grid xl:grid-cols-[auto_1fr]">
        <div className="relative xl:w-64">
          <Drawer />
        </div>

        <div
          style={{ backgroundImage: "" }}
          className="xl:h-screen  bg-no-repeat min-w-0 xl:overflow-y-scroll w-full bg-slate-50 dark:bg-black flex flex-col gap-4 relative"
        >
          <TopNavbar />
          <Suspense fallback="loading...  ">
            <Outlet />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
