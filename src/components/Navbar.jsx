import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              QEncrypt
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500">
              About
            </Link>
            <Link to="/features" className="text-gray-800 dark:text-white hover:text-blue-500">
              Features
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Auth Controls */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <FaUserCircle className="text-2xl text-gray-700 dark:text-white" />
                  <span className="text-gray-800 dark:text-white">{user.name}</span>
                </button>
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white dark:bg-gray-800 border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
