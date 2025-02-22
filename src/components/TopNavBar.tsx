import { Mail, Bell } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { hideDrawer, showDrawer } from "@/features/drawerSlice";
import ThemeToggle from "./ThemeToggle";

function StockSearch() {
  return (
    <div className="relative bg-slate-50 dark:bg-black w-full ">
      <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
        {/* <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg> */}
      </div>
      <input
        type="search"
        placeholder="Search"
        className="bg-transparent px-4 py-1 block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 dark:border-gray-800 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none"
      />
    </div>
  );
}

function MenuButton() {
  const drawerState = useSelector(
    (state: RootState) => state.drawer.drawerState
  );

  const dispatch = useDispatch();

  const toggleDrawer = () => {
    if (drawerState) {
      dispatch(hideDrawer());
    } else {
      dispatch(showDrawer());
    }
  };
  return (
    <button onClick={toggleDrawer} className="xl:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </button>
  );
}

function TopNavbar() {
  return (
    <div className="bg-white dark:bg-dark-foreground px-6 py-6 flex justify-between sticky top-0 z-10">
      <div>
        <MenuButton />
        <StockSearch />
      </div>
      <div className="flex items-center gap-2 text-gray-700 ">
        <ThemeToggle />
        <Mail strokeWidth={2} width={20} />
        <Bell strokeWidth={2} width={20} />
      </div>
    </div>
  );
}

export default TopNavbar;
