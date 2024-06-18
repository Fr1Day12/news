import { TOTAL_PAGES } from "@/shared/constants/constants";
import Pagination from "@/features/pagination/ui/Pagination/Pagination";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "@/pages/Main/utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}>
      <NewsList
        direction="column"
        type="item"
        news={news}
        isLoading={isLoading}
      />
    </Pagination>
  );
};

export default NewsListWithPagination;
