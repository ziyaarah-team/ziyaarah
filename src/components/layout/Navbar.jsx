import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <h2>Ziyaarah</h2>
        <span>Spiritual Journey Planner</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/prayers">Prayers</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <Link to="/login" className="sign-in-btn">
        Sign In
      </Link>
    </nav>
  );
}