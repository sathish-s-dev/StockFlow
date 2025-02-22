import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
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
