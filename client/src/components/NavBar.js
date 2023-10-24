import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navigationbar">
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="title">
            Portfolio.
          </Link>

          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" class="home-btn">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link to="/about" className="about-btn">
                About
              </Link>{" "}
            </li>
            <li>
              <Link to="/services" className="services-btn">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="portfolio-btn">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="contacts-btn">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default NavBar;
