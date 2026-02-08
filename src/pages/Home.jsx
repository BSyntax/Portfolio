import React from "react";
import Hero from "../components/sections/hero/Hero";
import Projects from "../components/sections/projects/Projects";

export default function Home() {
  return (
    <>
      <Hero
        header="Muzuvukile Nqwiliso"
        subheader={
          <>
            Web Developer &{" "}
            <span className="content-highlight">Web Designer</span> crafting
            modern, fast, and visually clean web experiences.
          </>
        }
      />
    </>
  );
}
