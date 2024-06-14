import styles from "./styles.module.css";
import LatestNews from "../latestNews/latestNews";
import NewsByFilters from "../newsByFilters/newsByFilters";

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
