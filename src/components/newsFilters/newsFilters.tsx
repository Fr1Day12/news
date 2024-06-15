import { getCategories } from "../../api/apiNews";
import { useTheme } from "../../context/ThemeContext";
import Categories from "../categories/categories";
import { useFetch } from "../healper/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import Search from "../search/search";
import Slider from "../slider/slider";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { isDark } = useTheme();
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Slider isDark={isDark}>
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
