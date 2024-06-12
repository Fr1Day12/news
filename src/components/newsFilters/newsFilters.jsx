import { getCategories } from "../../api/apiNews";
import Categories from "../categories/categories";
import { useFetch } from "../healper/hooks/useFetch";
import Search from "../search/search";
import styles from "./styles.module.css";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;