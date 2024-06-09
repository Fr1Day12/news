import { useEffect, useState } from "react";
import NewsBanner from "../newsBanner/newsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../newsList/newsList";
import Skeleton from "../skeleton/skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const responce = await getNews();
        setNews(responce.news);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <main className={styles.main}>
        {news.length > 0 && !isLoading ? (
          <NewsBanner item={news[0]} />
        ) : (
          <Skeleton type={"banner"} count={1} />
        )}

        {!isLoading ? (
          <NewsList news={news} />
        ) : (
          <Skeleton type={"item"} count={10} />
        )}
      </main>
    </>
  );
};

export default Main;
