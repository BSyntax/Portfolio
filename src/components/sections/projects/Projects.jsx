import React from "react";
import "./Projects.css";
import SectionHeader from "../../common/SectionHeader/SectionHeader";
import Card from "../../common/Card/Card";

export default function Projects({ projects }) {
  return (
    <section className="projects-section">
      <div className="child-container">
        <SectionHeader title="Selected Work" />
        <div className="projects-list">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
