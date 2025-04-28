import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Policy from "./pages/Policy";
import Integrity from "./pages/Integrity";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/integrity" element={<Integrity />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

