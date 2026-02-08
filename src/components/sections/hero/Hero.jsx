import React from "react";
import "./Hero.css";

export default function Hero({ header, subheader }) {
  return (
    <section className="hero">
      <div className="child-container">
        <div className="hero-content">
          <h1 className="hero-title">{header}</h1>
          <div className="hero-subtitle">
            <p>{subheader}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
