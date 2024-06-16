import { useEffect, useState } from "react";
import { formateDate } from "../../healper/formateDate";
import styles from "./styles.module.css";
import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(() => formateDate(new Date()));

  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(formateDate(new Date()));
    };

    const intervalid = setInterval(updateDate, 3600000);

    updateDate();

    return () => clearInterval(intervalid);
  }, []);

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.date}>{currentDate}</p>
      </div>

      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
