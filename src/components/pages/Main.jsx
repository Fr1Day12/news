import { useEffect, useState } from "react";
import NewsBanner from "../newsBanner/newsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../newsList/newsList";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const responce = await getNews();
        setNews(responce.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <main className={styles.main}>
        {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

        <NewsList news={news} />
      </main>
    </>
  );
};

export default Main;
