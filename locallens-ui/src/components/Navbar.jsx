import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        🌍 LocalLens
      </Link>

      <div className="ms-auto">
        <Link className="btn btn-outline-light me-2" to="/">Home</Link>
        <Link className="btn btn-outline-light me-2" to="/about">About Us</Link>
        <Link className="btn btn-success me-2" to="/login">Login</Link>
        <Link className="btn btn-primary" to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;