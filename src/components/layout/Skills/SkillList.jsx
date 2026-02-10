import React from "react";
import "./SkillList.css";

export default function SkillList({ skills }) {
  return (
    <div className="skills-container">
      <div className="skills-track">
        {[...skills, ...skills].map((skill, index) => {
          return (
            <div key={index} className="skill">
              <i className={skill}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
