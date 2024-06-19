import { NewsList } from "@/widgets/news";
import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { INews } from "@/entities/news";
import { useNavigateToNews } from "@/shared/hooks/useNavigateToNews";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const { navigateTo } = useNavigateToNews();

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p onClick={() => navigateTo(news)}>view more...</p>
        )}
      />
    </section>
  );
};

export default LatestNews;
