import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {!isAuthPage && <Navbar />}
      <div className="flex flex-1">
        {!isAuthPage && <Sidebar />}
        <main className={`flex-1 p-6 ${isAuthPage ? "w-full" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
