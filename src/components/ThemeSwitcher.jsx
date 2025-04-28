import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "react-feather";

export function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
