import { cn } from "@/lib/utils/cn";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideDrawer, showDrawer } from "@/features/drawerSlice";
import type { RootState } from "@/store/store";
import { X } from "react-feather";
import { Link } from "react-router";
import { drawerConfig } from "@/config/drawerConfig";

const Drawer = () => {
  const drawerState = useSelector(
    (state: RootState) => state.drawer.drawerState
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < drawerConfig.BREAKPOINT) {
        dispatch(hideDrawer());
      } else {
        dispatch(showDrawer());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div
      className={cn(
        "fixed xl:sticky w-full top-0 left-0 z-40 max-w-[256px] h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-dark-foreground",
        drawerState ? "translate-x-0" : "-translate-x-full"
      )}
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <aside className="w-full py-6 flex flex-col justify-between h-full">
        <nav className="space-y-8 text-sm pb-6">
          {drawerConfig.LINKS.map((section, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between pb-6">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" className="w-6" />
                  <h2 className="text-sm font-bold tracking-widest uppercase dark:text-gray-100">
                    {section.title}
                  </h2>
                </div>
                {index === 0 && (
                  <button
                    className="xl:hidden text-black dark:text-white"
                    onClick={() => dispatch(hideDrawer())}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    rel="noopener noreferrer"
                    to={item.path}
                    className="py-2 px-4 hover:bg-dark-foreground hover:text-white dark:text-slate-300 dark:hover:text-slate-800 dark:hover:bg-slate-50 transition-all duration-300 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-12 h-12 rounded-lg dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">Sathish S</h2>
            <span className="flex items-center space-x-1">
              <Link
                rel="noopener noreferrer"
                to="/profile"
                className="text-xs hover:underline dark:text-gray-600"
              >
                View profile
              </Link>
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
