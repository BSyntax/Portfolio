import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Card({ project }) {
  const { id, title, logo, description, tags, image, link, githubPath } =
    project;

  const navigate = useNavigate();

  return (
    <div className="project-card">
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
          text="Visit Website"
          buttonAction={() => window.open(link, "_blank")}
        />
      </div>
      <Link to={link}>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.object.isRequired,
};
