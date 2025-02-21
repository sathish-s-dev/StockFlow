import { Outlet } from "react-router";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavBar";

const Layout = () => {
  return (
    <div>
      <div className=" grid xl:grid-cols-[auto_1fr]">
        <div className="relative xl:w-64">
          <Drawer />
        </div>

        <div className="xl:h-screen min-w-0 xl:overflow-y-scroll w-full bg-slate-50 flex flex-col gap-4 relative">
          <TopNavbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
