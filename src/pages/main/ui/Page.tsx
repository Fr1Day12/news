import LatestNews from "@/pages/main/ui/LatestNews/LatestNews";
import NewsByFilters from "@/pages/main/ui/NewsByFilters/NewsByFilters";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
