import { getCategories } from "../../api/apiNews";
import Categories from "../Categories/Categories";
import { useFetch } from "../healper/hooks/useFetch";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
