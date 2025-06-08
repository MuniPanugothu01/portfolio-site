import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Muni Panugothu. <br />
        All rights reserved. <br />
        <span style={{color:'red'}}>CURRENTLY : </span> Open to opportunities
      </p>
    </section>
  );
}

export default Footer;
