import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.role === "Admin") navigate("/admin");
      else if (data.user.role === "Guide") navigate("/guide");
      else navigate("/traveler");

    } catch {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2>LocalLens Login</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input className="form-control mb-3" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="btn btn-success">Login</button>
      </form>

      <p className="mt-3">
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;