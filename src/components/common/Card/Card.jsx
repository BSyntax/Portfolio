import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function Card({
  image,
  category,
  title,
  description,
  link,
  index,
  special,
}) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`project-item group ${isReversed ? "reversed" : ""} ${special ? special : ""}`}
    >
      <div className="project-image-wrapper">
        <NavLink to={link}>
          <img src={image} alt={title} className="project-image" />
        </NavLink>
      </div>

      <div className="project-info">
        <span className="project-category">{category}</span>
        <h2 className="project-title">
          <NavLink to={link}>
            {title}
            <span className="arrow-icon">
              <FiArrowUpRight />
            </span>
          </NavLink>
        </h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
