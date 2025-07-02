import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshCart from "../../assets/LOGO_remover.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshCart}
          link="https://freshcart-three-eta.vercel.app/"
          h3="Fresh Cart"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={fitLift}
          link="https://fitness-app-phi.vercel.app/"
          h3="FitLift"
          p="Fitness App"
        />

        <ProjectCard
          src={viberr}
          link="https://tour-planner-six.vercel.app/"
          h3="Tourist"
          p="Travelling Website"
        />

        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
