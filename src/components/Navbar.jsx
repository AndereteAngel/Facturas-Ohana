import "./Navbar.css";

import { Link } from "react-router-dom";
import LogoOhana from "./LogoOhana";

function Navbar() {
  return (
    <nav className="ohana-navbar">
      <div className="ohana-navbar-container">
        <Link className="ohana-navbar-brand" to="/">
          <LogoOhana className="ohana-navbar-logo" />

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
