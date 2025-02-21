import { Outlet } from "react-router";
import Drawer from "./components/Drawer";

const Layout = () => {
  return (
    <div className="h-screen grid xl:grid-cols-[auto_1fr]">
      <div className="relative xl:w-80">
        <Drawer />
      </div>
      <div className=" w-full h-full bg-slate-50 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

