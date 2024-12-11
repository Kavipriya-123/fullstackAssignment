import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/user-login">User Login</Link>
    <Link to="/technician-login">Technician Login</Link>
  </nav>
);

export default Navbar;
