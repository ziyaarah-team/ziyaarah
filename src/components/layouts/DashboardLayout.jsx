import Sidebar from "../layout/Sidebar";
import WelcomeHeader from "./WelcomeHeader";
import QuoteBanner from "./QuoteBanner";
import StatsCard from "./StatsCard";
import CurrentJourney from "./CurrentJourney";
import JourneyStages from "./JourneyStages";
import "../styles/Dashboard.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

        <main className="dashboard-content">
          <WelcomeHeader />

          <QuoteBanner />

          <section className="stats-grid">
            <StatsCard
              title="Active Journeys"
              value="3"
              description="Currently planning"
              icon="🗺️"
              iconClass="blue"
            />

            <StatsCard
              title="Overall Progress"
              value="50%"
              description="Journey completed"
              icon="📈"
              iconClass="green"
            />

            <StatsCard
              title="Completed Tasks"
              value="8"
              description="Tasks completed"
              icon="✓"
              iconClass="yellow"
            />

            <StatsCard
              title="Total Tasks"
              value="16"
              description="Across your journey"
              icon="☑"
              iconClass="orange"
            />
          </section>

          <section className="dashboard-grid">
            <CurrentJourney />
            <JourneyStages />
          </section>
        </main>
      </div>
  );
}