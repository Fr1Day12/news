import { INews } from "@/entities/news/model/types";
import styles from "./styles.module.css";
import Image from "@/shared/ui/Image/Image";
import { formatTimeAgo } from "@/shared/healpers/formatTimeAgo";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;