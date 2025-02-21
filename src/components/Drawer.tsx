import { useEffect, useLayoutEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router";
import { RootState } from "@/store/store";
import { hideDrawer } from "@/features/drawerSlice";
import { showDrawer } from "@/features/drawerSlice";
import { Link } from "react-router";

const Drawer = () => {
  const drawerState = useSelector(
    (state: RootState) => state.drawer.drawerState
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (window.innerWidth < 1260) {
      dispatch(hideDrawer());
    } else {
      dispatch(showDrawer());
    }
  }, []);

  useEffect(() => {
   
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1260) {
        dispatch(hideDrawer());
      } else {
        dispatch(showDrawer());
      }
    });
  }, []);
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 z-40 max-w-xs h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800",
          drawerState ? "translate-x-0" : "-translate-x-full"
        )}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <aside className="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                Getting Started
              </h2>
              <div className="flex flex-col space-y-1">
                <Link rel="noopener noreferrer" to="/">
                  Installation
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Plugins
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Migrations
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Appearance
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Mamba UI
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                Dashboard
              </h2>
              <div className="flex flex-col space-y-1">
                <Link rel="noopener noreferrer" to="/">
                  Header
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Drawer
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Page Title
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Menus
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Sidebar
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Footer
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                Pages
              </h2>
              <div className="flex flex-col space-y-1">
                <Link rel="noopener noreferrer" to="/">
                  Homepage
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Users
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Tools
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Settings
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                Misc
              </h2>
              <div className="flex flex-col space-y-1">
                <Link rel="noopener noreferrer" to="/">
                  Tutorials
                </Link>
                <Link rel="noopener noreferrer" to="/">
                  Changelog
                </Link>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Drawer;
