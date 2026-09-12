import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Dashboard</h1>
          <p>Welcome to Ziyaarah Dashboard</p>
        </main>
      </div>
    </>
  );
}
