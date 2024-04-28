import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

const ToggleTheme = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem("toggle-theme") || "light");

    const handleToggleTheme = () => {
        console.log("clicked");
        if (theme === "dark") {
            setTheme("light");
            window.localStorage.setItem("toggle-theme", "light");
        } else if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("toggle-theme", "dark");
        }
    };

    return (
        <div className={styles.container} data-theme={theme}>
            <div className={styles.main}>
                <div className={styles.heading}>
                    Toggle theme with scss / data-* attr
                    <br />
                    <div className={styles.theme}>{theme}</div>
                </div>

                <input
                    type="button"
                    value="Toggle theme"
                    onClick={handleToggleTheme}
                />

                <div className={styles.themeIconContainer}>
                    {theme === "dark" ? <FaMoon className={styles.themeIcon} /> : <></>}
                    {theme === "light" ? <CiSun className={styles.themeIcon} /> : <></>}
                </div>
            </div>
        </div>
    )
}

export default ToggleTheme

