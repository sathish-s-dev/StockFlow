import { Outlet, useLocation } from "react-router";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavBar";
import { Suspense } from "react";
import SLoadingScreen from "./pages/LoadingPage";
import { AnimatePresence, motion } from "motion/react";

const Layout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Suspense fallback={<SLoadingScreen />}>
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
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
