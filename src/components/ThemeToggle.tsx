import { setTheme } from "@/features/themeSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { Moon, Sun } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

// function ThemeToggle() {
//   // const [theme, setTheme] = useState(() => {
//   //   return localStorage.getItem("theme") || "light";
//   // });

//   const theme = useSelector((state: RootState) => state.theme);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     dispatch(setTheme(theme));
//     localStorage.setItem("theme", theme);
//   }, [theme, dispatch]);

//   return (
//     <div className="flex items-center">
//       <label className="ui-switch">
//         <input
//           type="checkbox"
//           id="theme-toggle"
//           className="sr-only"
//           checked={theme === "dark"}
//           onChange={() =>
//             dispatch(setTheme(theme === "dark" ? "light" : "dark"))
//           }
//         />
//         <div className="slider">
//           <div className="circle"></div>
//         </div>
//       </label>
//     </div>
//   );
// }
function ThemeToggle() {
  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem("theme") || "light";
  // });

  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    dispatch(setTheme(theme));
    localStorage.setItem("theme", theme);
  }, [theme, dispatch]);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={theme === "dark"}
        onChange={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
      />
      <label
        htmlFor="theme-toggle"
        className="relative flex w-14 h-7 bg-gray-900 dark:bg-gray-100 border rounded-full cursor-pointer p-1 duration-300 items-center transition-all"
      >
        <Sun className="text-orange-400 w-4 h-4" />
        <Moon className="text-gray-100 w-4 h-4 ml-auto" />
        <span
          className={`absolute self-center w-5 h-5 bg-white dark:bg-gray-800 rounded-full transition-all duration-300 ${
            theme === "dark" ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </label>
    </div>
  );
}

export default ThemeToggle;
