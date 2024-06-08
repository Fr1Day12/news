import { useEffect, useState } from "react";
import { formateDate } from "../healper/formateDate";
import styles from "./styles.module.css";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(formateDate(new Date()));
    };

    const intervalid = setInterval(updateDate, 3600000);

    updateDate();

    return () => clearInterval(intervalid);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS</h1>
      <p className={styles.date}>{currentDate}</p>
    </header>
  );
};

export default Header;
