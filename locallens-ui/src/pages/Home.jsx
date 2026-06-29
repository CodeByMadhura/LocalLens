import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import HikingIcon from "@mui/icons-material/Hiking";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import ForestIcon from "@mui/icons-material/Forest";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SpaIcon from "@mui/icons-material/Spa";

import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Home() {
  const categories = [
    { icon: <RestaurantIcon />, name: "Food" },
    { icon: <HikingIcon />, name: "Adventure" },
    { icon: <TheaterComedyIcon />, name: "Culture" },
    { icon: <ForestIcon />, name: "Nature" },
    { icon: <CameraAltIcon />, name: "Photography" },
    { icon: <NightlifeIcon />, name: "Nightlife" },
    { icon: <AccountBalanceIcon />, name: "History" },
    { icon: <SpaIcon />, name: "Wellness" },
  ];

  const destinations = [
    { name: "Ratnagiri", text: "Coastal Beauty" },
    { name: "Mahabaleshwar", text: "Nature Paradise" },
    { name: "Goa", text: "Beach Vibes" },
    { name: "Munnar", text: "Green Hills" },
    { name: "Jaipur", text: "Royal Culture" },
  ];

  return (
    <div className="home-page">
      <nav className="main-navbar">
        <Link to="/" className="brand-logo">
          <span className="brand-icon">
            <LocationOnIcon />
          </span>
          <h2>
            Local<span>Lens</span>
          </h2>
        </Link>

        <div className="nav-menu">
          <Link to="/" className="active-link">
            <TravelExploreIcon />
            Discover
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/login" className="login-btn">
            <LoginIcon />
            Login
          </Link>
          <Link to="/register" className="register-btn">
            <PersonAddIcon />
            Register
          </Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge">
              <TravelExploreIcon />
              Discover authentic local experiences
            </div>

            <h1>
              Travel Like <br />a <span>Local</span>
            </h1>

            <p>
              Uncover hidden gems, savor traditional flavors, and experience
              destinations through the eyes of those who call them home.
            </p>

            <div className="search-box">
              <SearchIcon className="search-icon" />
              <input placeholder="Search destinations, cities, or experiences..." />
              <button>
                <TravelExploreIcon />
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </section>

      <section className="why-section">
        <h2>Why LocalLens?</h2>

        <div className="why-grid">
          <div className="why-card">
            <VerifiedIcon />
            <h3>Verified & Trusted</h3>
            <p>All places are verified by admin before travelers can view them.</p>
          </div>

          <div className="why-card">
            <GroupsIcon />
            <h3>Local Insights</h3>
            <p>Hidden spots are suggested by local guides and residents.</p>
          </div>

          <div className="why-card">
            <MapIcon />
            <h3>Personalized Plans</h3>
            <p>Itinerary plans are generated based on interests and budget.</p>
          </div>

          <div className="why-card">
            <FavoriteIcon />
            <h3>Community Driven</h3>
            <p>Support local communities and discover authentic experiences.</p>
          </div>
        </div>
      </section>

      <section className="destinations-section">
        <div className="section-heading">
          <h2>Popular Destinations</h2>
          <Link to="/login">View all destinations →</Link>
        </div>

        <div className="destination-grid">
          {destinations.map((item, index) => (
            <div className="destination-card" key={index}>
              <div className="destination-overlay">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="main-footer">
        <div>
          <h3>
            <LocationOnIcon /> LocalLens
          </h3>
          <p>
            Discover hidden gems, embrace local culture, and travel like a true local.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Explore</Link>
        </div>

        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Subscribe to get travel tips and updates.</p>
          <div className="newsletter">
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;