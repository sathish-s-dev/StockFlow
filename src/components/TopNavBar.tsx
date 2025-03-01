import { Mail, Bell } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { hideDrawer, showDrawer } from "@/features/drawerSlice";
import ThemeToggle from "./ThemeToggle";
import Autocomplete from "./ui/AutoComplete";
import stockSymbols from "@/constants/stockSymbols";
import { Link } from "react-router";

// function StockSearch() {
//   return (
//     <div className="relative bg-slate-50 dark:bg-black w-full ">
//       {/* <div className="relative w-full max-w-lg">
//         <input
//           type="text"
//           className="w-full h-10 pl-10 pr-12 text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm outline-none focus:ring-1 focus:ring-emerald-400/50 focus:border-emerald-400/50"
//           placeholder="Search Google"
//         />

//         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5"
//             viewBox="0 0 24 24"
//           >
//             <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
//           </svg>
//         </div>

//         <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="#4285f4"
//               d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
//             ></path>
//             <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
//             <path
//               fill="#fbbc05"
//               d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
//             ></path>
//             <path
//               fill="#ea4335"
//               d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
//             ></path>
//           </svg>
//         </button>
//       </div> */}

//       <div className="relative w-full">
//         <label htmlFor="Search" className="sr-only">
//           {" "}
//           Search for...{" "}
//         </label>

//         <input
//           type="text"
//           id="Search"
//           placeholder="chad@rhcp.com"
//           className="w-full rounded-md px-4 bg-slate-100 border-gray-200 py-2 pe-10 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
//         />

//         <span className="absolute inset-y-0 end-3 grid w-10 place-content-center">
//           <button
//             type="button"
//             className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//           >
//             <span className="sr-only">Search</span>

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//               />
//             </svg>
//           </button>
//         </span>
//       </div>
//     </div>
//   );
// }

function MenuButton() {
  const drawer = useSelector((state: RootState) => state.drawer.drawer);

  const dispatch = useDispatch();

  const toggleDrawer = () => {
    if (drawer) {
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
    <div className="bg-white dark:bg-dark-foreground dark:text-white px-6 py-6 flex justify-between w-full sticky top-0 z-10">
      <div className="flex items-center gap-2 w-full max-w-xs">
        <MenuButton />
        {/* <StockSearch /> */}
        <Autocomplete
          options={stockSymbols}
          onSelect={() => {
            console.log("selected");
          }}
        />
      </div>
      <div className="flex items-center gap-4 text-gray-600 dark:text-slate-200 ">
        <Link to="/" className="hidden md:flex">
          <Mail strokeWidth={2} width={20} />
        </Link>
        <Link to="/" className="hidden md:flex">
          <Bell strokeWidth={2} width={20} />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default TopNavbar;
