import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2>About Us</h2>
        <p>
          LocalLens is designed to solve the problem of generic travel planning.
          Most travelers visit only popular tourist locations and miss authentic
          local experiences. Our platform connects travelers with verified hidden
          spots added by local guides.
        </p>

        <p>
          The main uniqueness of LocalLens is personalized itinerary generation.
          Travelers can enter their destination, duration, travel type, interests,
          and budget. The system then suggests a suitable travel plan using only
          admin-approved hidden spots.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;