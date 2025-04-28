import { createContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(3); // sample data

  const addNotification = () => setUnreadCount((count) => count + 1);
  const clearNotifications = () => setUnreadCount(0);

  return (
    <NotificationContext.Provider
      value={{ unreadCount, addNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
