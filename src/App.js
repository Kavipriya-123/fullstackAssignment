import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationDropdown from "./components/LocationDropdown";
import SearchBar from "./components/SearchBar";
import TechnicianCarousel from "./components/TechnicianCarousel";
import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin";
import TechnicianLogin from "./components/TechnicianLogin";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/technician-login" element={<TechnicianLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

// Example Home Page Component
const Home = () => (
  <div>
    <h1>Welcome to Appliance Repair Service</h1>
    <LocationDropdown />
    <SearchBar />
    <TechnicianCarousel />
  </div>
);

export default App;
