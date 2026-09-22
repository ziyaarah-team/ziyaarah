import { NavLink, Link } from "react-router-dom";

import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">

        {/* Logo */}
        <div className="sidebar-logo">
          <div className="brand-logo-icon">
            <i className="fa-solid fa-kaaba"></i>
          </div>

          <div>
            <h2>Ziyaarah</h2>
            <p>Journey Planner</p>
          </div>
        </div>

        {/* Main Navigation */}
        <ul className="sidebar-links">
          <li>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-house"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/trips">
              <i className="fa-solid fa-calendar-days"></i>
              <span>Trip Planner</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/rituals">
              <i className="fa-solid fa-circle-check"></i>
              <span>Ritual Tracker</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/resources">
              <i className="fa-solid fa-book-open"></i>
              <span>Resources</span>
            </NavLink>
          </li>
        </ul>

      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">

        {/* User Profile */}
        <div className="user-profile">
          <div className="user-avatar">A</div>

          <div className="user-info">
            <h4>Amina</h4>
            <p>mariam@gmail.com</p>
          </div>
        </div>

        {/* Sign Out */}
        <Link to="/login" className="sign-out-btn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Sign Out</span>
        </Link>

      </div>
    </aside>
  );
}