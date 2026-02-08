import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="child-container">
        <p className="footer-text">Ready to start a project?</p>
        <div className="footer-header">
          <NavLink to="mailto:mzu.nqwiliso@gmail.com">
            <h1>Get in Touch</h1>
          </NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="child-container">
          <div className="footer-social">
            <NavLink to="https://www.linkedin.com/in/muzuvukile-nqwiliso">
              <p>LinkedIn</p>
            </NavLink>
            <NavLink to="https://github.com/BSyntax">
              <p>GitHub</p>
            </NavLink>
          </div>
          <div className="footer-copyright">
            <p>© 2026 Muzuvukile Nqwiliso. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
