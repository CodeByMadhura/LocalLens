import { useState } from "react";
import { addSpot } from "../services/spotService";

function GuideDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [spot, setSpot] = useState({
    name: "",
    destination: "",
    category: "Beach",
    description: "",
    entryFee: 0,
    estimatedCost: 0,
    visitDuration: 1,
    latitude: 0,
    longitude: 0,
    imageUrl: "",
    addedByUserId: user?.id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addSpot(spot);
      alert("Spot submitted for admin approval");
    } catch {
      alert("Failed to add spot");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Guide Dashboard</h2>
      <h5>Add Hidden Spot</h5>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Spot Name"
          onChange={(e) => setSpot({ ...spot, name: e.target.value })} />

        <input className="form-control mb-2" placeholder="Destination"
          onChange={(e) => setSpot({ ...spot, destination: e.target.value })} />

        <select className="form-control mb-2"
          onChange={(e) => setSpot({ ...spot, category: e.target.value })}>
          <option>Beach</option>
          <option>Temple</option>
          <option>Food</option>
          <option>Waterfall</option>
          <option>Fort</option>
          <option>Nature</option>
        </select>

        <textarea className="form-control mb-2" placeholder="Description"
          onChange={(e) => setSpot({ ...spot, description: e.target.value })} />

        <input className="form-control mb-2" type="number" placeholder="Entry Fee"
          onChange={(e) => setSpot({ ...spot, entryFee: Number(e.target.value) })} />

        <input className="form-control mb-2" type="number" placeholder="Estimated Cost"
          onChange={(e) => setSpot({ ...spot, estimatedCost: Number(e.target.value) })} />

        <input className="form-control mb-2" type="number" placeholder="Visit Duration"
          onChange={(e) => setSpot({ ...spot, visitDuration: Number(e.target.value) })} />

        <input className="form-control mb-2" type="number" placeholder="Latitude"
          onChange={(e) => setSpot({ ...spot, latitude: Number(e.target.value) })} />

        <input className="form-control mb-2" type="number" placeholder="Longitude"
          onChange={(e) => setSpot({ ...spot, longitude: Number(e.target.value) })} />

        <input className="form-control mb-3" placeholder="Image URL"
          onChange={(e) => setSpot({ ...spot, imageUrl: e.target.value })} />

        <button className="btn btn-primary">Add Spot</button>
      </form>
    </div>
  );
}

export default GuideDashboard;