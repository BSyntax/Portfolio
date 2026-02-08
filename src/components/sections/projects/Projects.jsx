import React from "react";
import Card from "../../common/Card/Card";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBJmQAfDc8JM_M7nTOOBWMLbEY5G31GHY1nWZs7oQvw9JnJP4okw6vXi1adGG6WBeqNEz5DZCfMtyEfOqxoL1BO3MMv5nY0dPWd8z6ZisMfTdNW7uJKOuZcZnPsxau15h-htFmsIAdU1bdda3J1u5Rse4cuCEh_1Mu7001e9cX_fWtR7p60cSYrBuVQr8Do23QJYePiOl0L9TjAwiiZkC7gPdzFwFFcmo4Z4YXN9jylPPL9tmxeW-E2wenCrDiGjmJFbTddHZwuKN6V",
      category: "Branding • 2023",
      title: "Lumina Core",
      description:
        "Redefining the visual language for a high-end architectural firm in Zurich.",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcKXfIKKxv3d_JWDsYeLMH42WZtIHsssSLWghWjy3FPZ8thVj8IGIEzxAQa1galxbB-ch032IS-4iU3m0qUX6gKodKKPAMri08jg4X0x2jRN7G0dK82m2w2UQz3nfmWZHfx_Z4qbojLHs9jLWV8miQvpJtpoCqCbZh83ZsgmO0FnYWnixHv7PKJk485MEjDlvYk1v9W6bmYHL-4SigNhyVroNUGFJ140-ZFJ5JlAhABOQt48g5DUQN1yey80QyinacEqpIibe7gyxq",
      category: "UI/UX Design • 2024",
      title: "Aura Mobile",
      description:
        "A meditation experience focused on serenity and effortless navigation.",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBTft93LNOFV9QTzkeQmnR9kCdvQ7mkonIWITQvoF-MiMCKuIeFOQxGClXobhP_rd-2NltQu4M4uxk-2z7NQZnwxD55TQdWIjqSZZ82ZxrprW5JQ9G8VHrgBcqUxww8pZg5RioEvhAT_nMgyEu4T8MVIQY8S3PwxvH-KmuEVG0e9ob7UpR-CvfUh_JLMn1kj6yRrbmIp9AWi85FVk4qrVvHqEF5gwLRTDArhSHulW_VRSgE3EPvSn2h5emvCsddNtbYVfmDuhA7oO8Z",
      category: "Photography • 2022",
      title: "Sōl Mono",
      description:
        "A photographic study of light and shadow in Brutalist architecture.",
      link: "#",
      special: "panoramic",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-list">
        {projects.map((project, index) => (
          <Card key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
