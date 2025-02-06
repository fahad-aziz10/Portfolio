/**
 * Portfolio component
 *
 * Highlights some of your creations, including projects in power systems,
 * embedded systems, AI automation, and web development.
 */

import React from "react";

/**
 * Desk image
 *
 * Updated with a more relevant image.
 */
import image from "../images/engineering-workspace.jpg";

const imageAltText = "Engineering workspace with circuit boards and a laptop";

/**
 * Project list
 *
 * Highlighting projects related to Electrical Engineering, Embedded Systems, AI, and Web Development.
 */
const projectList = [
  {
    title: "Power System Load Flow Analysis",
    description:
      "Developed a load flow analysis tool using MATLAB and PSS/E to optimize power grid performance.",
    url: "https://github.com/fahad-aziz10/power-loadflow-analysis",
  },
  {
    title: "Embedded System for Smart Energy Metering",
    description:
      "Designed a real-time energy monitoring system using ESP32 and IoT integration for smart metering applications.",
    url: "https://github.com/fahad-aziz10/smart-energy-meter",
  },
  {
    title: "AI-Based Fault Detection in Power Systems",
    description:
      "Implemented a machine learning model in Python to predict faults in electrical networks, improving grid stability.",
    url: "https://github.com/fahad-aziz10/ai-fault-detection",
  },
  {
    title: "React Portfolio Website",
    description:
      "Built a personal portfolio website using React, showcasing projects, skills, and experience in electrical engineering and software development.",
    url: "https://fahad-aziz10.github.io/Portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "8px" }}
            alt={imageAltText}
            loading="lazy"
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit project: ${project.title}`}>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
