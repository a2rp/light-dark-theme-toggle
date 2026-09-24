import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaCodepen,
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaMoon,
  FaPatreon,
  FaSun,
  FaYoutube,
  FaCoffee,
} from "react-icons/fa";
import { FiArrowUp, FiCheck, FiMail } from "react-icons/fi";
import styles from "./app.module.scss";
import ToggleTheme from "./toggleTheme/ToggleTheme";

const footerLinks = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaCode },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://patreon.com/a2rp", icon: FaPatreon },
];

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 280);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={styles.appShell}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Light Dark Theme Toggle home">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
          <span>
            <small>React UI demo</small>
            <strong>Light / Dark Theme</strong>
          </span>
        </a>
        <a className={styles.sourceLink} href="https://github.com/a2rp/light-dark-theme-toggle" target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" />
          <span>View source</span>
        </a>
      </header>

      <main id="top" className={styles.main}>
        <section className={styles.hero} aria-labelledby="page-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A small, reusable interface pattern</p>
            <h1 id="page-title">Switch the mood of your interface.</h1>
            <p className={styles.intro}>
              A focused React example showing how a theme preference can be switched,
              remembered locally and presented with a simple SCSS data attribute.
            </p>
            <div className={styles.badges}>
              <span><FiCheck aria-hidden="true" /> Local persistence</span>
              <span><FiCheck aria-hidden="true" /> Responsive layout</span>
              <span><FiCheck aria-hidden="true" /> Accessible control</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img src={process.env.PUBLIC_URL + "/preview.png"} alt="Theme toggle interface preview" />
          </div>
        </section>

        <section className={styles.demoSection} aria-labelledby="demo-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Try it yourself</p>
              <h2 id="demo-title">Theme toggle demo</h2>
            </div>
            <p>Choose a theme and refresh the page. Your preference stays saved.</p>
          </div>
          <ToggleTheme />
        </section>

        <section className={styles.detailsGrid} aria-label="Project details">
          <article className={styles.detailCard}>
            <FaMoon aria-hidden="true" />
            <h2>Dark by design</h2>
            <p>Use a calmer palette for focused work and low-light environments.</p>
          </article>
          <article className={styles.detailCard}>
            <FaSun aria-hidden="true" />
            <h2>Light when needed</h2>
            <p>Switch to a bright theme whenever you need a clearer canvas.</p>
          </article>
          <article className={styles.detailCard}>
            <FaCode aria-hidden="true" />
            <h2>Easy to reuse</h2>
            <p>The theme value is kept in local storage and applied through SCSS variables.</p>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <p className={styles.eyebrow}>Stay connected</p>
            <p className={styles.footerText}>Explore more projects and resources.</p>
          </div>
          <nav className={styles.socialLinks} aria-label="Social and support links">
            {footerLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span>Copyright © {new Date().getFullYear()} </span>
          <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
        </div>
      </footer>

      <button
        className={styles.topButton + " " + (showTopButton ? styles.topButtonVisible : "")}
        type="button"
        onClick={scrollToTop}
        aria-label="Go to top"
      >
        <FiArrowUp aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;
