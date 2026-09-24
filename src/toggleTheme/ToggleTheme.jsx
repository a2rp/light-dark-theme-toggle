import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "./styles.module.scss";

const STORAGE_KEY = "toggle-theme";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => window.localStorage.getItem(STORAGE_KEY) || "light");

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div className={styles.container} data-theme={theme}>
      <div className={styles.demoCard}>
        <div className={styles.demoIcon} aria-hidden="true">
          {isDark ? <FaMoon /> : <FiSun />}
        </div>
        <div>
          <p className={styles.demoLabel}>Current theme</p>
          <h3>{isDark ? "Dark mode" : "Light mode"}</h3>
          <p className={styles.demoDescription}>Stored in your browser for the next visit.</p>
        </div>
        <button className={styles.toggleButton} type="button" onClick={handleToggleTheme} aria-pressed={isDark}>
          {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          <span>Use {isDark ? "light" : "dark"} theme</span>
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
