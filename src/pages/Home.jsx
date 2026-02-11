import React, { useContext } from "react";
import Hero from "../components/sections/hero/Hero";
import Projects from "../components/sections/projects/Projects";
import { useProjectsContext } from "../context/ProjectsProvider";

export default function Home() {
  const { retrieveProjects } = useProjectsContext();
  const projects = retrieveProjects();
  const available = true;

  return (
    <>
      <Hero
        header={
          <>
            Hi, I’m Muzuvukile, a{" "}
            <span className="content-highlight">Full-Stack Developer</span>{" "}
            crafting intuitive, user-focused web applications.
          </>
        }
        available={available}
      />
      <Projects projects={projects} />
    </>
  );
}
