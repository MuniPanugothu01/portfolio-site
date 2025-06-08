// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";
// import logo from "../assets/portfolio.png";

// const NavBar = () => {
//   return (
//     <nav className={styles.navbarContainer}>
//       <Link to="/" className={styles.logoLink}>
//         <img src={logo} alt="My Logo" className={styles.logo} />
//       </Link>

//       <Link to="/" className={styles.navLink}>
//         Home
//       </Link>
//       <Link to="/About" className={styles.navLink}>
//         About-Me
//       </Link>
//       <Link to="/Project" className={styles.navLink}>
//         Projects
//       </Link>
//       <Link to="/Skills" className={styles.navLink}>
//         Skills
//       </Link>
//       <Link to="/Contact" className={styles.navLink}>
//         Contact-Me
//       </Link>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../assets/portfolio.png";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Helper function to determine if link is active
  const isActiveLink = (path) => {
    if (path === "/" && activeLink === "/") return true;
    if (path !== "/" && activeLink.startsWith(path)) return true;
    return false;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbarContainer}>
      {/* Logo */}
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="Portfolio Logo" className={styles.logo} />
      </Link>

      {/* Mobile Toggle Button */}
      <button
        className={styles.mobileToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <div
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
      </button>

      {/* Navigation Links */}
      <div
        className={`${styles.navLinksContainer} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <Link
          to="/"
          className={`${styles.navLink} ${
            isActiveLink("/") ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/About"
          className={`${styles.navLink} ${
            isActiveLink("/About") ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        <Link
          to="/Project"
          className={`${styles.navLink} ${
            isActiveLink("/Project") ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Projects
        </Link>
        <Link
          to="/Skills"
          className={`${styles.navLink} ${
            isActiveLink("/Skills") ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Skills
        </Link>
        <Link
          to="/Contact"
          className={`${styles.navLink} ${
            isActiveLink("/Contact") ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
