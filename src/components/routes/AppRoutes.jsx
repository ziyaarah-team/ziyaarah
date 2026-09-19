import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
 import TripPlanner from "../pages/TripPlanner";
 import RitualTracker from "../pages/RitualTracker";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/trips" element={<TripPlanner />} />
      <Route path="/ritual-tracker" element={<RitualTracker />} />
    </Routes>
  );
}
