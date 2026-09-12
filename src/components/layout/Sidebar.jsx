import { Link} from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Ziyaarah</h2>
        <p>Journey Planner</p>
      </div>

      <ul className= "sidebar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/trips">Trip Planner</Link>
        </li>

        <li>
          <Link to="/rituals">Ritual Tracker</Link>
        </li>

        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>

      <div className="user-section">
        <h4>Maryama</h4>
        <p>maryama@email.com</p>

        <Link to="/login" className="logout-btn">
          Sign Out
        </Link>
      </div>
    </aside>
  );
}