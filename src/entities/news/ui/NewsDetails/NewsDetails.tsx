import { INews } from "@/entities/news/model/types";
import { formatTimeAgo } from "@/shared/healpers/formatTimeAgo";
import styles from "./styles.module.css";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language.toLocaleUpperCase()})
          <br />
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
        <ul className={styles.tags}>
          {item.category.map((category) => {
            return (
              <button className={styles.active} key={category}>
                {category}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
