import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GuideDashboard from "./pages/GuideDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import TravelerDashboard from "./pages/TravelerDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/guide" element={<GuideDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/traveler" element={<TravelerDashboard />} />
    </Routes>
  );
}

export default App;