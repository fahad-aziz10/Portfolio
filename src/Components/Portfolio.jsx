/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

const projectList = [
  {
    title: "AI-Based Fault Detection in Power Systems",
    description:
      "Implemented a machine learning model in Python to predict faults in electrical networks, improving grid stability.",
  },
  {
    title: "React Portfolio Website",
    description:
      "Built a personal portfolio website using React, showcasing projects, skills, and experience in electrical engineering and software development.",
    url: "https://fahad-aziz10.github.io/Portfolio",
  },
  {
    title: "Power System Load Flow and Stability Analysis",
    description:
      "Developed comprehensive simulations for 132kV transmission networks using PSS/E. Conducted load flow analysis, fault studies, and stability assessments to optimize grid performance and ensure compliance with operational standards.",
  },
  {
    title: "Embedded Systems for Renewable Energy Management",
    description:
      "Designed and implemented an embedded system using microcontrollers and IoT integration to monitor and control solar and wind energy systems. Enhanced efficiency through real-time data acquisition and predictive maintenance algorithms.",
  },
  {
    title: "Wireless Power Transfer through Inductive Coupling",
    description:
      "Engineered a proof-of-concept prototype for contactless energy transfer. Optimized coil design, resonance tuning, and efficiency analysis, demonstrating the potential for future wireless charging applications.",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
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
