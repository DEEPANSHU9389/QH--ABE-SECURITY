import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { Bell } from "react-feather";

export function NotificationBell() {
  const { unreadCount } = useContext(NotificationContext);

  return (
    <div className="relative">
      <Bell className="text-gray-700 dark:text-gray-300" size={18} />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
          {unreadCount}
        </span>
      )}
    </div>
  );
}
