import { Link, useLocation } from "react-router-dom";
import { Users, Briefcase, Handshake, CalendarDays, LogIn } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Alumni", path: "/alumni", icon: <Users size={17} /> },
    { name: "Mentorship", path: "/mentorship", icon: <Handshake size={17} /> },
    { name: "Jobs", path: "/jobs", icon: <Briefcase size={17} /> },
    { name: "Events", path: "/events", icon: <CalendarDays size={17} /> },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="logo-mark">A</div>
        <div>
          <h2>Alumni<span>Connect</span></h2>
          <small>CONNECT • GROW • INSPIRE</small>
        </div>
      </Link>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="navbar-actions">
        <Link to="/login" className="nav-login">
          <LogIn size={17} />
          Login
        </Link>

        <Link to="/register" className="nav-register">
          Join Network
        </Link>
      </div>
    </header>
  );
}

export default Navbar;