import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-success shadow">
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          🌿 Facturas Ohana
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;