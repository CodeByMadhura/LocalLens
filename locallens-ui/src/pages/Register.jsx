import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Traveler",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registered successfully");
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="form-control mb-2" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input className="form-control mb-2" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <select className="form-control mb-3"
          onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option>Traveler</option>
          <option>Guide</option>
          <option>Admin</option>
        </select>

        <button className="btn btn-primary">Register</button>
      </form>

      <p className="mt-3">
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;