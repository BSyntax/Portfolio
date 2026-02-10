import React from "react";
import Hero from "../components/sections/hero/Hero";
import Projects from "../components/sections/projects/Projects";

export default function Home() {
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
        available={false}
      />
      <Projects />
    </>
  );
}
