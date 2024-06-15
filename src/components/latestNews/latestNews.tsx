import BannersList from "../bannersList/bannersList";
import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
