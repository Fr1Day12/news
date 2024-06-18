import LatestNews from "@/pages/Main/ui/LatestNews/LatestNews";
import styles from "./styles.module.css";
import NewsByFilters from "@/pages/Main/ui/NewsByFilters/NewsByFilters";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
