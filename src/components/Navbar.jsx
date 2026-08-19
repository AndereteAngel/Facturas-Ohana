import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="ohana-navbar">
      <div className="ohana-navbar-container">
        <Link className="ohana-navbar-brand" to="/">
          <span className="ohana-navbar-icon">🌸</span>

          <span>OHANA</span>
        </Link>

        <span className="ohana-navbar-tagline">
          Aromas que transforman espacios
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
