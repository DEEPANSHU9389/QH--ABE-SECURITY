import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";

export function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
      >
        <img
          src="/avatar.png"
          alt="User"
          className="w-8 h-8 rounded-full mr-2"
        />
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
          <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
          <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
          <Link to="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</Link>
        </div>
      )}
    </div>
  );
}
