import { useEffect, useState } from "react";
import { getPendingSpots, approveSpot, rejectSpot } from "../services/spotService";

function AdminDashboard() {
  const [spots, setSpots] = useState([]);

  const loadSpots = async () => {
    const data = await getPendingSpots();
    setSpots(data);
  };

  useEffect(() => {
    loadSpots();
  }, []);

  const handleApprove = async (id) => {
    await approveSpot(id);
    alert("Spot approved");
    loadSpots();
  };

  const handleReject = async (id) => {
    await rejectSpot(id);
    alert("Spot rejected");
    loadSpots();
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <h5>Pending Spots</h5>

      {spots.length === 0 && <p>No pending spots</p>}

      {spots.map((spot) => (
        <div className="card mb-3" key={spot.id}>
          <div className="card-body">
            <h4>{spot.name}</h4>
            <p><b>Destination:</b> {spot.destination}</p>
            <p><b>Category:</b> {spot.category}</p>
            <p><b>Description:</b> {spot.description}</p>
            <p><b>Cost:</b> ₹{spot.estimatedCost}</p>
            <p><b>Status:</b> {spot.status}</p>

            <button className="btn btn-success me-2"
              onClick={() => handleApprove(spot.id)}>
              Approve
            </button>

            <button className="btn btn-danger"
              onClick={() => handleReject(spot.id)}>
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;