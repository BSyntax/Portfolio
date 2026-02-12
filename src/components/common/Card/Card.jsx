import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";
import Button from "../../common/Button/Button";

export default function Card({ project, title, type }) {
  const { id, logo, description, tags, image, link } = project;

  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isDesktop = window.innerWidth > 768;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`project-card ${title.toUpperCase() === "SITEWISE" ? "site-wise" : ""}`}
    >
      <div className="card-content">
        <div className="card-header">
          <div className="card-logo">
            <img src={logo} alt={title} />
          </div>
          <div className="card-title">
            <span>{title}</span>
          </div>
        </div>

        <div className="card-body">
          <p>{description}</p>

          <div className="card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Button
          text={`${type.toLowerCase() === "mobile app" ? "Visit GitHub" : "Visit Website"}`}
          buttonAction={() => window.open(link, "_blank")}
        />
      </div>

      <Link to={link} target="_blank" rel="noopener noreferrer">
        <div
          className={`card-image ${type.toLowerCase() === "mobile app" ? "mobile" : "desktop"}`}
          onMouseEnter={() => isDesktop && setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onMouseMove={isDesktop ? handleMouseMove : null}
        >
          <img src={image} alt={title} />

          <div
            className={`tooltip ${isVisible ? "visible" : ""}`}
            style={{
              left: `${position.x + 14}px`,
              top: `${position.y + 14}px`,
            }}
          >
            <span>
              {type.toLowerCase() === "mobile app"
                ? "View GitHub"
                : "View Website"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.object.isRequired,
};
