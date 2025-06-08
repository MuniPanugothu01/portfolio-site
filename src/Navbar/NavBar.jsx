import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../assets/portfolio.png";

const NavBar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="My Logo" className={styles.logo} />
      </Link>

      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/About" className={styles.navLink}>
        About-Me
      </Link>
      <Link to="/Project" className={styles.navLink}>
        Projects
      </Link>
      <Link to="/Skills" className={styles.navLink}>
        Skills
      </Link>
      <Link to="/Contact" className={styles.navLink}>
        Contact-Me
      </Link>
    </nav>
  );
};

export default NavBar;
