import { useEffect, useState } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { formateDate } from "@/shared/healpers/formateDate";
import styles from "./styles.module.css";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(() => formateDate(new Date()));

  const { isDark } = useTheme();

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
      <ThemeButton />
    </header>
  );
};

export default Header;
