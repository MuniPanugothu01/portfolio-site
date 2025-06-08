import styles from "./HeroStyles.module.css";
// import heroImg from "../../assets/Design uten navn.png";
import heroImg from "../../assets/Muni-Port.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
// import the components
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <>
      <section
        id="hero"
        className={styles.container}
        style={{ marginTop: "-250px" }}
      >
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Harris Johnsen"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Muni
            <br />
            Panugothu
          </h1>
          <h2>Full-Stack Developer</h2>
          <span>
            <a href="" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/MuniPanugothu01" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/munipanugothu/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            Code crafter on a mission — designing and developing full-stack apps
            that just make sense. Always learning, always building — turning
            curiosity into clean, functional code.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
            <button style={{ marginLeft: "30px" }} className="hover">
              HireMe
            </button>
          </a>
        </div>
      </section>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Hero;
