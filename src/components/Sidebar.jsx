import { Link } from "react-router-dom";

const links = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/upload", label: "Upload" },
  { path: "/policy", label: "Access Policy" },
  { path: "/integrity", label: "Integrity Check" },
  { path: "/history", label: "History" },
  { path: "/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-full p-4 border-r border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Navigation</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
