import React from "react";
import certificateImage from "../../assets/Certificate.png";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <h1 style={{ textAlign: "center"}}>Experience</h1>
      <div className="experience-card">
        {/* Certificate Image */}
        <img
          src={certificateImage}
          alt="Muni Panugothu Certificate"
          className="certificate-image"
        />

        {/* Experience Content */}
        <div className="experience-details">
          <h2>Fullstack Developer Intern</h2>
          <p>
            <strong>Company:</strong> Gollamudi Technology and Software
          </p>
          <p>
            <strong>Duration:</strong> Dec 2024 – May 2025 (6 Months)
          </p>
          <p>
            <strong>Role:</strong> Web Developer Intern
          </p>
          <p>
            <strong>Tech Stack:</strong> Vite, ReactJS, Node.js, Tailwind CSS,
            REST APIs
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
