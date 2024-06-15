import styles from "./styles.module.css";
import LatestNews from "../components/latestNews/latestNews";
import NewsByFilters from "../components/newsByFilters/newsByFilters";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <LatestNews />

        <NewsByFilters />
      </main>
    </>
  );
};

export default Main;
