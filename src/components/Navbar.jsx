import { Link, useLocation } from "react-router-dom";
import { UserDropdown } from "./UserDropdown";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { NotificationBell } from "./NotificationBell";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/upload", label: "Upload" },
  { path: "/policy", label: "Access Policy" },
  { path: "/integrity", label: "Integrity" },
  { path: "/history", label: "History" },
  { path: "/settings", label: "Settings" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">QEncrypt</div>
      <div className="flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium ${
              location.pathname === link.path
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
            } hover:underline`}
          >
            {link.label}
          </Link>
        ))}
        <NotificationBell />
        <ThemeSwitcher />
        <UserDropdown />
      </div>
    </nav>
  );
}
