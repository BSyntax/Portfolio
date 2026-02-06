import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li className="nav-link">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Work
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="portfolio-version">
          <p>Portfolio 2026 V-1.0</p>
        </div>
      </div>
    </header>
  );
}
