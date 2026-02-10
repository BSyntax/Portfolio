import React from "react";
import Skills from "../../layout/Skills/SkillList";
import "./Hero.css";

export default function Hero({ header, available }) {
  const skills = [
    "devicon-react-original",
    "devicon-javascript-plain",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-git-plain",
    "devicon-nodejs-plain",
    "devicon-express-original",
    "devicon-mongodb-plain",
    "devicon-python-plain",
    "devicon-dart-plain",
    "devicon-flutter-plain",
    "devicon-java-plain",
    "devicon-csharp-plain",
  ];
  return (
    <section className="hero">
      <div className="child-container">
        <div className="hero-content">
          <span className="hero-greeting">👋</span>
          <h1 className="hero-title">{header}</h1>
          <div className="available">
            
            <div
              className="available-dot"
              style={{
                backgroundColor: available ? "#16d46f" : "#ff4444",
              }}
            ></div>
            <p>{available ? "Available for work" : "Not available for work"}</p>
          </div>
          <div className="tech-stack">
            <span className="tech-stack-title">Tech Stack </span>
            <Skills skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
}
