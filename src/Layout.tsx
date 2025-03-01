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
<<<<<<< HEAD
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
=======
    <div className="flex flex-col min-h-screen">
      <div className="grid xl:grid-cols-[auto_1fr]">
        {/* Sidebar */}
        <div className="relative xl:w-64 w-0 xl:block hidden">
          <Drawer />
        </div>

        {/* Main Content */}
        <div className="xl:h-screen bg-no-repeat min-w-0 overflow-auto w-full bg-slate-50 dark:bg-black flex flex-col gap-4 relative">
          <TopNavbar />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Suspense fallback={<SLoadingScreen />}>
                <Outlet />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
>>>>>>> 43209bb6757f5164a2baa8bd524a6061c04b772b
      <Footer />
    </div>
  );
};

export default Layout;
