// import React from "react";
// import "./Experience.css";
// import CertificateImage from "../../assets/Muni Panugothu-certificate.png"; // make sure you save the certificate as an image

// const Experience = () => {
//   return (
//     <div className="experience-card">
//       {/* Certificate Image */}
//       <img
//         src={CertificateImage}
//         alt="Muni Panugothu Certificate"
//         className="certificate-image"
//       />

//       {/* Experience Content */}
//       <div className="experience-details">
//         <h2>Fullstack Developer Intern</h2>
//         <p><strong>Company:</strong> Gollamudi Technology and Software</p>
//         <p><strong>Duration:</strong> Dec 2024 – May 2025 (6 Months)</p>
//         <p><strong>Role:</strong> Web Developer Intern</p>
//         <p><strong>Tech Stack:</strong> Vite, ReactJS, Node.js, Tailwind CSS, REST APIs</p>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-card">
      {/* Certificate Image */}
      <a
        href="../../assets/Muni Panugothu-certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../assets/Muni Panugothu-certificate.pdf"
          alt="Muni Panugothu Certificate"
          className="certificate-image"
        />
      </a>

      {/* Experience Content */}
      <div className="experience-details">
        <h2>Fullstack Developer Intern</h2>
        <p><strong>Company:</strong> Gollamudi Technology and Software</p>
        <p><strong>Duration:</strong> Dec 2024 – May 2025 (6 Months)</p>
        <p><strong>Role:</strong> Web Developer Intern</p>
        <p><strong>Tech Stack:</strong> Vite, ReactJS, Node.js, Tailwind CSS, REST APIs</p>
      </div>
    </div>
  );
};

export default Experience;
