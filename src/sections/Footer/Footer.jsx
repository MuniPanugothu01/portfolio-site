import styles from "./FooterStyles.module.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/About" className={styles.link}>
          About
        </Link>
        <Link to="/Project" className={styles.link}>
          Projects
        </Link>
        <Link to="/Skills" className={styles.link}>
          Skills
        </Link>
        <Link to="/Contact" className={styles.link}>
          Contact
        </Link>
      </nav>

      <div className={styles.contactInfo}>
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com" className={styles.link}>
            munipanugothu2001@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+1234567890" className={styles.link}>
            +91 9347870616
          </a>
        </p>
      </div>

      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/munipanugothu/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MuniPanugothu01"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaGithub />
        </a>
      </div>

      <p className={styles.rights}>
        &copy; 2025 Muni Panugothu. All rights reserved.
        <br />
        <span className={styles.status}>CURRENTLY: Open to opportunities</span>
      </p>
    </section>
  );
}

export default Footer;
