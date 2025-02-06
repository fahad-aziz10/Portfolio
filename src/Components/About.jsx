/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */

const description =
  "I am a results-driven Electrical Engineer with a Master's degree from UET Lahore, specializing in Embedded Systems, Artificial Intelligence, and System Automation. With expertise in developing AI-powered solutions for industrial automation, smart devices, and IoT applications, I integrate cutting-edge technologies to optimize performance and efficiency. My strong background in Machine Learning, Deep Learning, and Embedded Development enables me to design intelligent, high-performance systems that drive innovation.";

const skillsList = [
  "Embedded Systems & Firmware Development",
  "AI & Machine Learning for Embedded Devices",
  "IoT & Edge Computing",
  "Computer Vision & Deep Learning",
  "Automation & Control Systems",
  "AI-Driven Predictive Maintenance",
  "Low-Power Embedded Design",
  "Microcontroller Programming (ARM, ESP32, STM32)",
  "Sensor Integration & Signal Processing",
  "Power System Analysis & Optimization",
  "AI & Machine Learning in Energy Solutions",
  "High-Performance PCB Design",
  "Grid Modernization & Renewable Integration",
  "Simulation & Modeling (MATLAB, PSS/E, PSCAD)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "My passion lies at the intersection of Embedded Systems and AI, where I strive to develop intelligent, high-performance solutions. I am driven by challenging projects that push the boundaries of innovation, whether in smart automation, IoT, or AI-powered systems. My goal is to contribute to groundbreaking advancements that shape the future of technology.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
