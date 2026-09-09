
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ padding: "20px", flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}