/**
 * Education component
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
import image from "../images/edu.jpg";

const imageAltText = "education background";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Education</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          <li>
            Master’s in Electrical Engineering – University of Engineering and Technology, Lahore
          </li>
          <li>
            Bachelor’s in Electrical Engineering – University of Engineering and Technology, Lahore
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
