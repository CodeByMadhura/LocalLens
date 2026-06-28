import { useState } from "react";
import { generateItinerary } from "../services/itineraryService";

function TravelerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    userId: user?.id,
    destination: "",
    duration: 1,
    travelType: "Solo",
    interests: "",
    budget: 0,
  });

  const [result, setResult] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();

    try {
      const data = await generateItinerary(form);
      setResult(data);
    } catch {
      alert("No itinerary found. Add and approve spots first.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Traveler Dashboard</h2>
      <h5>Generate Personalized Itinerary</h5>

      <form onSubmit={handleGenerate}>
        <input className="form-control mb-2" placeholder="Destination"
          onChange={(e) => setForm({ ...form, destination: e.target.value })} />

        <input className="form-control mb-2" type="number" placeholder="Duration"
          onChange={(e) => setForm({ ...form, duration: Number(e.target.value) })} />

        <select className="form-control mb-2"
          onChange={(e) => setForm({ ...form, travelType: e.target.value })}>
          <option>Solo</option>
          <option>Family</option>
          <option>Friends</option>
          <option>Couple</option>
        </select>

        <input className="form-control mb-2" placeholder="Interests e.g. Beach,Food,Temple"
          onChange={(e) => setForm({ ...form, interests: e.target.value })} />

        <input className="form-control mb-3" type="number" placeholder="Budget"
          onChange={(e) => setForm({ ...form, budget: Number(e.target.value) })} />

        <button className="btn btn-success">Generate Plan</button>
      </form>

      {result && (
        <div className="mt-4">
          <h3>Your Personalized Plan</h3>
          <p><b>Destination:</b> {result.destination}</p>
          <p><b>Budget:</b> ₹{result.givenBudget}</p>
          <p><b>Total Estimated Cost:</b> ₹{result.totalEstimatedCost}</p>

          {result.dayWisePlan.map((day) => (
            <div className="card mb-3" key={day.day}>
              <div className="card-header">
                <h4>Day {day.day}</h4>
              </div>

              <div className="card-body">
                {day.places.map((place) => (
                  <div key={place.spotId} className="mb-3 border-bottom pb-2">
                    <h5>{place.name}</h5>
                    <p><b>Category:</b> {place.category}</p>
                    <p>{place.description}</p>
                    <p><b>Entry Fee:</b> ₹{place.entryFee}</p>
                    <p><b>Estimated Cost:</b> ₹{place.estimatedCost}</p>
                    <p><b>Visit Duration:</b> {place.visitDuration} hours</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TravelerDashboard;