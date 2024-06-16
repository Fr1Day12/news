import { useTheme } from "../../context/ThemeContext";
import Categories from "../Categories/Categories";
import { IFilters } from "../../interfaces";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}
const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filter}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
