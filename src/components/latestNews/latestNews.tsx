import { getLatestNews } from "../../api/apiNews";
import BannersList from "../bannersList/bannersList";
import { useFetch } from "../healper/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
