import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Logout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, [logout]);

  return <p className="text-center mt-10">Logging out...</p>;
}
