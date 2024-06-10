import NewsBanner from "../newsBanner/newsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../newsList/newsList";
import Pagination from "../pagination/pagination";
import Categories from "../categories/categories";
import Search from "../search/search";
import { useDebounce } from "../healper/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../constants/constants";
import { useFetch } from "../healper/hooks/useFetch";
import { useFilters } from "../healper/hooks/useFilters";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <>
      <main className={styles.main}>
        {dataCategories ? (
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        ) : null}

        <Search
          keywords={filters.keywords}
          setKeywords={(keywords) => changeFilter("keywords", keywords)}
        />

        <NewsBanner
          isLoading={isLoading}
          item={data && data.news && data.news[0]}
        />

        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        />

        <NewsList news={data?.news} isLoading={isLoading} />

        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        />
      </main>
    </>
  );
};

export default Main;
